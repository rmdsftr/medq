import { BadRequestException, Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreateHospitalDto } from "./dto/hospital.dto";
import { CreateSpDto } from "./dto/spesialis.dto";
import * as bcrypt from 'bcrypt';
import { CreateProvinsiDto } from "./dto/provinsi.dto";
import { CreateKotaDto } from "./dto/kota.dto";

@Injectable()
export class HospitalService{
    constructor(private prisma: PrismaService){}

    async createHospital(data: CreateHospitalDto, file: Express.Multer.File){
        const checkID = await this.prisma.hospitals.findFirst({
            where : {id_rs: data.id_rs}
        })

        if(checkID){
            throw new BadRequestException('Rumah sakit sudah terdaftar');
        }

        const hashedpw = await bcrypt.hash(data.sandi_admin, 10)

        await this.prisma.hospitals.create({
            data: {
                id_rs: data.id_rs,
                sandi_admin: hashedpw,
                nama_rs: data.nama_rs,
                tipe: data.tipe,
                status: data.status,
                alamat: data.alamat,
                kode_pos: data.kode_pos,
                id_kota: data.id_kota,
                id_prov: data.id_prov,
                foto: file?.buffer || null,
                latitude: data.latitude,
                longitude: data.longitude
            }
        })

        return 'Berhasil mendaftarkan rumah sakit';
    }
}


@Injectable()
export class SpesialisService{
    constructor(private prisma:PrismaService){}

    async createSP(data: CreateSpDto){
        function generateSpesialisId(): string {
            const now = new Date();

            const pad = (n: number) => n.toString().padStart(2, '0');
            const year = now.getFullYear();
            const month = pad(now.getMonth() + 1);
            const day = pad(now.getDate());
            const hour = pad(now.getHours());
            const minute = pad(now.getMinutes());
            const second = pad(now.getSeconds());
            const millis = now.getMilliseconds().toString().padStart(3, '0');

            return `SP${year}${month}${day}-${hour}${minute}${second}-${millis}`;
        }

        await this.prisma.specialists.create({
            data:{
                id_sp:generateSpesialisId(),
                spesialis: data.spesialis
            }
        })

        return 'Berhasil menambahkan spesialis';
    }
}

@Injectable()
export class ProvinsiService{
    constructor(private prisma: PrismaService){}

    async CreateProvinsi(data: CreateProvinsiDto){
        const provName = await this.prisma.provinces.findFirst({
            where: {nama_prov: data.nama_prov}
        })

        if(provName){
            throw new BadRequestException("Provinsi sudah terdaftar");
        }

        await this.prisma.provinces.create({
            data: {
                nama_prov:data.nama_prov
            }
        })

        return 'Provinsi baru sudah terdaftar'
    }
}

@Injectable()
export class KotaService{
    constructor(private prisma: PrismaService){}

    async CreateKota(data: CreateKotaDto){
        const cityName = await this.prisma.cities.findFirst({
            where:{nama_kota:data.nama_kota}
        })

        if(cityName){
            throw new BadRequestException("Kota sudah terdaftar")
        }
        
        await this.prisma.cities.create({
            data: {
                nama_kota: data.nama_kota,
                id_prov: data.id_prov
            }
        })

        return 'Kota baru berhasil dibuat';
    }
}