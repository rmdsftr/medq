import { BadRequestException, ConflictException, Injectable, InternalServerErrorException } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AddSPDoctor, CreateDoctorDto, updateDoctorDto } from "./dto/doctor.dto";
import * as bcrypt from 'bcrypt';
import { CreateJadwalDto } from "./dto/jadwal.dto";
import { CreatePraktikDto } from "./dto/praktik.dto";
import { toTitleCase } from "../utils/title.utils";

@Injectable()
export class DoctorService{
    constructor(private prisma:PrismaService){}

    async CreateDoctor(data: CreateDoctorDto, file:Express.Multer.File){
        try {
            await this.prisma.$transaction(async(tx) => {
                const idDoc = await tx.doctors.findUnique({
                    where: {
                        lisensi: data.lisensi}
                })

                const checkemail = await tx.doctors.findUnique({
                    where: {email: data.email}
                })

                if(checkemail || idDoc){
                    throw new BadRequestException("Email sudah digunakan atau dokter sudah dibuat")
                }
            })

            const hashedpassword = await bcrypt.hash(data.sandi_dokter, 10)

            const newDoc = await this.prisma.$transaction(async(tx) => {
                await tx.doctors.create({
                    data: {
                        lisensi: data.lisensi,
                        nama_dokter: toTitleCase(data.nama_dokter),
                        email: data.email,
                        sandi_dokter: hashedpassword,
                        gender: data.gender,
                        tgl_lahir: new Date(data.tgl_lahir),
                        status: data.status,
                        foto: file?.buffer || null
                    }
                })

                await tx.detail_sp.createMany({
                    data : data.id_sp.map(spid => ({
                        lisensi: data.lisensi,
                        id_sp: spid
                    }))
                })
            })
            
            return {
                message: 'berhasil mendaftarkan dokter',
                data: newDoc
            }
        } catch (error) {
            if(error instanceof ConflictException){
                throw error;
            }
            console.error("Error mendaftarkan dokter : ", error);
            throw new InternalServerErrorException("Kesalahan pada server")
        }
    }

    async updateDoctor(lisensi:string, data: updateDoctorDto){
        try {
            const docID = await this.prisma.doctors.findUnique({
                where: {lisensi: lisensi}
            })

            if(!docID){
                throw new BadRequestException("Data dokter tidak ditemukan")
            }

            const updatedDoc = await this.prisma.doctors.update({
                where: {lisensi: lisensi},
                data: {
                    nama_dokter: toTitleCase(data.nama_dokter),
                    status: data.status
                }
            })

            return {
                message: 'Berhasil mengedit data dokter',
                data: updatedDoc
            }
        } catch (error) {
            console.error("Error memperbarui data dokter : ", error);
            throw new InternalServerErrorException("Kesalahan pada server")
        }
    }

    async addSpDoctor(data:AddSPDoctor, lisensi:string){
        try {
            const existing = await this.prisma.detail_sp.findUnique({
                where: {
                    lisensi_id_sp:{
                        lisensi: lisensi,
                        id_sp: data.id_sp
                    }
                }
            })

            if(existing){
                throw new BadRequestException("Spesialis sudah didaftarkan")
            }

            const newdetail = await this.prisma.detail_sp.create({
                data : {
                    lisensi: lisensi,
                    id_sp: data.id_sp
                }
            })

            return {
                message: 'Spesialis dokter berhasil ditambahkan',
                data: newdetail
            }
        } catch (error) {
            if(error instanceof ConflictException){
                throw error;
            }
            console.error("Error menambahkan spesialis dokter : ", error)
            throw new InternalServerErrorException("Kesalahan pada server")
        }
    }

    async deleteSPDoctor(lisensi:string, id_sp:string){
        try {
            const detailsp = await this.prisma.detail_sp.findUnique({
                where: { 
                    lisensi_id_sp : {
                        lisensi: lisensi,
                        id_sp: id_sp
                    }
                }
            })

            if(!detailsp){
                throw new BadRequestException("Detail spesialis tidak ditemukan")
            }

            await this.prisma.detail_sp.delete({
                where: { 
                    lisensi_id_sp : {
                        id_sp: id_sp,
                        lisensi: lisensi
                    }
                }
            })

            return {
                message : 'Berhasil menghapus detail spesialis'
            }
        } catch (error) {
            if(error instanceof ConflictException){
                throw error;
            }
            console.error("Error menghapus detail spesialis dokter : ", error)
            throw new InternalServerErrorException("Kesalahan pada server")
        }
    }
}

@Injectable()
export class JadwalService{
    constructor(private prisma:PrismaService){}

    async CreateJadwal(data: CreateJadwalDto){
        try {
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

            const check_id = await this.prisma.schedules.findUnique({
                where: {id_sched: id}
            })

            if(check_id){
                throw new BadRequestException("Jadwal sudah ada")
            }

            const newJad = await this.prisma.schedules.create({
                data : {
                    id_sched: id,
                    hari: data.hari,
                    start_session: data.start_session,
                    end_session: data.end_session
                }
            })

            return {
                message: 'Berhasil membuat jadwal',
                data : newJad
            }
        } catch (error) {
            if(error instanceof ConflictException){
                throw error;
            }
            console.error("Error menambahkan jadwal : ", error)
            throw new InternalServerErrorException("Kesalahan pada server")
        }
    }

    async deleteJadwal(id_sched:string){
        try {
            const checkid = await this.prisma.schedules.findUnique({
                where: {id_sched: id_sched}
            })

            if(!checkid){
                throw new BadRequestException("Jadwal tidak ditemukan")
            }

            await this.prisma.schedules.delete({
                where: {id_sched: id_sched}
            })

            return {
                message: 'Berhasil menghapus jadwal'
            }
        } catch (error) {
            if(error instanceof ConflictException){
                throw error;
            }
            console.error("Error menghapus jadwal : ", error)
            throw new InternalServerErrorException("Kesalahan pada server")
        }
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
        try {
            await this.prisma.$transaction(async(tx) => {
                const rsID = await tx.hospitals.findUnique({
                    where: {id_rs: data.id_rs}
                })

                const spID = await tx.specialists.findUnique({
                    where: {id_sp: data.id_sp}
                })

                const docID = await tx.doctors.findUnique({
                    where:{lisensi: data.lisensi}
                })

                const jadID = await tx.schedules.findUnique({
                    where:{id_sched:data.id_sched}
                })

                if(!rsID && !spID && !docID && !jadID){
                    throw new BadRequestException("Data rumah sakit, spesialis, dokter, dan jadwal tidak ditemukan")
                }
            })

            const newprak = await this.prisma.practices.create({
                data : {
                    id_prak: this.generatePraktikId(),
                    id_rs: data.id_rs,
                    id_sp: data.id_sp,
                    lisensi: data.lisensi,
                    id_sched: data.id_sched
                }
            })

            return {
                message : 'Berhasil menambahkan jadwal praktik',
                data : newprak
            }
        } catch (error) {
            console.error("Error menambahkan jadwal praktik : ", error)
            throw new InternalServerErrorException("Kesalahan pada server")
        }
    }

    async deletePraktik(id_prak:string){
        try {
            const prakID = await this.prisma.practices.findUnique({
                where: {id_prak: id_prak}
            })

            if(!prakID){
                throw new BadRequestException("Data praktik tidak valid")
            }

            await this.prisma.practices.delete({
                where: {id_prak: id_prak}
            })

            return {
                message: 'Berhasil menghapus jadwal praktik'
            }
        } catch (error) {
            if(error instanceof ConflictException){
                throw error;
            }
            console.error("Error menghapus praktik")
            throw new InternalServerErrorException("Kesalahan pada server")
        }
    }
}