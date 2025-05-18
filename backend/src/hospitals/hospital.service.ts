import { BadRequestException, Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreateDoctorDto } from "./dto/create-doctor.dto";
import * as bcrypt from 'bcrypt';
import { CreateJadwalDto } from "./dto/create-jadwal.dto";
import { CreatePraktikDto } from "./dto/create-praktik.dto";

@Injectable()
export class DoctorService{
    constructor(private prisma:PrismaService){}

    async CreateDoctor(data: CreateDoctorDto, file:Express.Multer.File){
        const idDoc = await this.prisma.doctors.findFirst({
            where: {lisensi: data.lisensi}
        })

        if(idDoc){
            throw new BadRequestException("Dokter sudah terdaftar")
        }

        const hashedpassword = await bcrypt.hash(data.sandi_dokter, 10)

        await this.prisma.doctors.create({
            data: {
                lisensi: data.lisensi,
                nama_dokter: data.nama_dokter,
                email: data.email,
                sandi_dokter: hashedpassword,
                gender: data.gender,
                tgl_lahir: new Date(data.tgl_lahir),
                status: data.status,
                foto: file?.buffer || null
            }
        })

        await this.prisma.detail_sp.create({
            data:{
                lisensi: data.lisensi,
                id_sp: data.id_sp
            }
        })

        return 'berhasil mendaftarkan dokter';
    }
}

@Injectable()
export class JadwalService{
    constructor(private prisma:PrismaService){}

    async CreateJadwal(data: CreateJadwalDto){
        
        const hariMap: Record<string, number> = {
            Senin: 0,
            Selasa: 1,
            Rabu: 2,
            Kamis: 3,
            Jumat: 4,
            Sabtu: 5,
            Minggu: 6,
        };

        const day = hariMap[data.hari];
        const mulai = data.start_session.replace(':', '');
        const selesai = data.end_session.replace(':', '');

        const id = `J${day}-${mulai}-${selesai}`;

        const check_id = await this.prisma.schedules.findFirst({
            where: {id_sched: id}
        })

        if(check_id){
            return 'Jadwal sudah ada di database'
        }

        await this.prisma.schedules.create({
            data : {
                id_sched: id,
                hari: data.hari,
                start_session: data.start_session,
                end_session: data.end_session
            }
        })

        return 'Jadwal berhasil dibuat';
    }
}

@Injectable()
export class PraktikService{
    constructor(private prisma:PrismaService){}

    generatePraktikId(): string {
        const now = new Date();
        const date = now.toISOString().slice(2, 10).replace(/-/g, ''); 
        const time = now.toTimeString().slice(0, 5).replace(':', ''); 
        const random = Math.random().toString(36).substring(2, 6).toUpperCase(); 
        return `PRK-${date}-${time}-${random}`;
    }

    async createPraktik(data: CreatePraktikDto){
        const rsID = await this.prisma.hospitals.findUnique({
            where: {id_rs: data.id_rs}
        })

        if(!rsID){
            throw new BadRequestException("Data rumah sakit tidak ditemukan")
        }

        const spID = await this.prisma.specialists.findUnique({
            where: {id_sp: data.id_sp}
        })

        if(!spID){
            throw new BadRequestException("Data spesialis tidak ditemukan")
        }

        const docID = await this.prisma.doctors.findUnique({
            where:{lisensi: data.lisensi}
        })

        if(!docID){
            throw new BadRequestException("Data dokter tidak ditemukan")
        }

        const jadID = await this.prisma.schedules.findUnique({
            where:{id_sched:data.id_sched}
        })

        if(!jadID){
            throw new BadRequestException("Jadwal tidak ditemukan")
        }

        await this.prisma.practices.create({
            data : {
                id_prak: this.generatePraktikId(),
                id_rs: data.id_rs,
                id_sp: data.id_sp,
                lisensi: data.lisensi,
                id_sched: data.id_sched
            }
        })

        return 'Jadwal praktik berhasil ditambahkan';
    }
}