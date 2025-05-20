import { BadRequestException, ConflictException, Injectable, InternalServerErrorException, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreateHospitalDto, EditStatusRSDto } from "./dto/hospital.dto";
import { CreateSpDto, EditSpDto } from "./dto/spesialis.dto";
import * as bcrypt from 'bcrypt';
import { CreateProvinsiDto, UpdateProvinsiDto } from "./dto/provinsi.dto";
import { CreateKotaDto, EditKotaDto } from "./dto/kota.dto";
import { toTitleCase } from "../utils/title.utils";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

@Injectable()
export class HospitalService{
    constructor(private prisma: PrismaService){}

    async createHospital(data: CreateHospitalDto, file: Express.Multer.File){
        try {
            const checkID = await this.prisma.hospitals.findUnique({
                where : {id_rs: data.id_rs}
            })

            if(checkID){
                throw new BadRequestException('Rumah sakit sudah terdaftar');
            }

            const hashedpw = await bcrypt.hash(data.sandi_admin, 10)

            const newHospital = await this.prisma.hospitals.create({
                data: {
                    id_rs: data.id_rs,
                    sandi_admin: hashedpw,
                    nama_rs: toTitleCase(data.nama_rs),
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
            return {
                message: "Berhasil mendaftarkan rumah sakit",
                data: newHospital
            }
        } catch (error) {
            if(error instanceof ConflictException){
                throw error;
            }
            console.error("Unexpected error creating hospital:", error);
            throw new InternalServerErrorException("Gagal mendaftarkan rumah sakit");
        }
    }

    async EditStatusHospital(data: EditStatusRSDto, id_rs:string){
        try {
            const IDRS = await this.prisma.hospitals.findUnique({
                where:{ id_rs: id_rs}
            })

            if(!IDRS){
                throw new NotFoundException("Data rumah sakit tidak ditemukan")
            }

            const updated =  await this.prisma.hospitals.update({
                where: {id_rs: id_rs},
                data: {status: data.status}
            })

            return {
                message: 'Status rumah sakit berhasil diubah',
                data : updated
            }    
        } catch (error) {
            console.error("Error menghapus data rumah sakit : ", error);
            throw new InternalServerErrorException("Kesalahan pada server")
        }
    }

    async DeleteHospital(id_rs: string){
        try {
            const rsID = await this.prisma.hospitals.findUnique({
                where: {id_rs: id_rs}
            })

            if(!rsID){
                throw new NotFoundException("Rumah sakit tidak ditemukan")
            }

            await this.prisma.$transaction(async(tx) => {
                await tx.practices.deleteMany({
                    where: {id_rs: id_rs}
                })

                await tx.hospitals.delete({
                    where: { id_rs: id_rs}
                })
            })

            return {
                message: 'Data rumah sakit berhasil dihapus'
            }
        } catch (error) {
            console.error("Error menghapus data rumah sakit : ", error)
            throw new InternalServerErrorException("Kesalahan pada server")
        }
    }
}


@Injectable()
export class SpesialisService{
    constructor(private prisma:PrismaService){}

    generateSpesialisId(): string {
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

    async createSP(data: CreateSpDto){
        try {
            const checksp = await this.prisma.specialists.findUnique({
                where: {spesialis: toTitleCase(data.spesialis)}
            })

            if(checksp){
                throw new BadRequestException("Spesialis sudah terdaftar")
            }

            const newsp = await this.prisma.specialists.create({
                data:{
                    id_sp: this.generateSpesialisId(),
                    spesialis: toTitleCase(data.spesialis)
                }
            })

            return {
                message: 'Berhasil menambahkan spesialis',
                data : newsp
            }
        } catch (error) {
            console.error("Error menambahkan data spesialis: ", error);
            throw new InternalServerErrorException("Kesalahan pada server")
        } 
    }

    async editSP(data: EditSpDto, id_sp:string){
        try {
            const checkSP = await this.prisma.specialists.findUnique({
                where: {spesialis: toTitleCase(data.spesialis),
                    NOT: {id_sp: id_sp}
                }
            })

            if(checkSP){
                throw new BadRequestException("Data spesialis sudah ada");
            }

            const updated = await this.prisma.specialists.update({
                where: {id_sp: id_sp},
                data: {spesialis: toTitleCase(data.spesialis)}
            })

            return {
                message: 'Berhasil memperbarui nama spesialis',
                data : updated
            }
        } catch (error) {
            console.error("Error memperbarui nama spesialis : ", error)
            throw new InternalServerErrorException("Kesalahan pada server")
        }
    }

    async deleteSP(id_sp:string){
        try {
            const spID = await this.prisma.specialists.findUnique({
                where: {id_sp: id_sp}
            })

            if(!spID){
                throw new BadRequestException("Data spesialis tidak ditemukan")
            }

            await this.prisma.$transaction(async(tx) => {
                await tx.detail_sp.deleteMany({
                    where: {id_sp: id_sp}
                })

                await tx.practices.deleteMany({
                    where: {id_sp: id_sp}
                })

                await tx.specialists.delete({
                    where: {id_sp: id_sp}
                })
            })
            return {
                message: 'Berhasil menghapus data spesialis dan anak-anaknya'
            }
        } catch (error) {
            console.error("Error menghapus data : ", error)
            throw new InternalServerErrorException("Kesalahan pada server")
        }
    }
}

@Injectable()
export class ProvinsiService{
    constructor(private prisma: PrismaService){}

    async CreateProvinsi(data: CreateProvinsiDto){
        try{
            const provName = await this.prisma.provinces.findUnique({
                where: {nama_prov: toTitleCase(data.nama_prov)}
            })

            if(provName){
                throw new BadRequestException("Provinsi sudah terdaftar");
            }
            const newprov = await this.prisma.provinces.create({
                data: {
                    nama_prov: toTitleCase(data.nama_prov)
                }
            })

            return {
                message: 'Provinsi berhasil dibuat',
                data: newprov
            }
        } catch(err){
            if(err instanceof PrismaClientKnownRequestError && err.code === 'P2002'){
                throw new BadRequestException("provinsi sudah ada")
            }
            throw new InternalServerErrorException("Terjadi kesalahan saat membuat provinsi")
        }
    }

    async EditProvinsi(data:UpdateProvinsiDto, id_prov:number){
        try {
            await this.prisma.$transaction(async(tx) => {
                const namaProv = await tx.provinces.findUnique({
                    where: {
                        nama_prov: toTitleCase(data.nama_prov),
                        NOT: {id_prov: id_prov}
                    }
                })
                if(namaProv){
                    throw new BadRequestException("Provinsi sudah terdaftar")
                }

                const provID = await tx.provinces.findUnique({
                    where: {id_prov: id_prov}
                })
                if(!provID){
                    throw new BadRequestException("Provinsi tidak ditemukan")
                }
            })
            
            const updatedprov = await this.prisma.provinces.update({
                where: {id_prov: id_prov},
                data: {nama_prov: toTitleCase(data.nama_prov)}
            })

            return {
                message: 'Berhasil memperbarui nama provinsi',
                data : updatedprov
            }
        } catch (error) {
            throw new InternalServerErrorException(error)
        } 
    }

    async deleteProvinsi(id_prov:number){
        try {
            const provid = await this.prisma.provinces.findUnique({
                where: {id_prov: id_prov}
            })

            if(!provid){
                throw new BadRequestException("Provinsi tidak ditemukan")
            }

            await this.prisma.provinces.delete({
                where: {id_prov: id_prov}
            })

            return {
                message: 'Berhasil menghapus provinsi'
            }
        } catch (error) {
            if(error instanceof ConflictException){
                throw error;
            }
            console.error("Error menghapus provinsi : ", error)
            throw new InternalServerErrorException("Kesalahan pada server")
        } 
    }
}

@Injectable()
export class KotaService{
    constructor(private prisma: PrismaService){}

    async CreateKota(data: CreateKotaDto){
        try {
            const provid = await this.prisma.provinces.findUnique({
                where: {id_prov: data.id_prov}
            })

            if(!provid){
                throw new BadRequestException("Provinsi tidak terdaftar")
            }

            const exist = await this.prisma.cities.findFirst({
                where: {
                    nama_kota: toTitleCase(data.nama_kota),
                    id_prov: data.id_prov
                }
            })

            if(exist){
                throw new BadRequestException("kota sudah terdaftar")
            }
            
            const newcity = await this.prisma.cities.create({
                data: {
                    nama_kota: toTitleCase(data.nama_kota),
                    id_prov: data.id_prov
                }
            })
            return {
                message: 'Kota baru berhasil dibuat',
                data: newcity
            }
        } catch (error) {
            if(error instanceof ConflictException){
                throw error;
            }
            console.error("Error menambahkan kota : ", error);
            throw new InternalServerErrorException("Kesalahan pada server")
        } 
    }

    async EditKota(data:EditKotaDto, id_kota:number){
        try {
            const existingkota = await this.prisma.cities.findUnique({
                where: {id_kota: id_kota}
            })
            if(!existingkota){
                throw new BadRequestException("Kota tidak ditemukan")
            }

            const editedcity = await this.prisma.cities.update({
                where: {id_kota: id_kota},
                data: {
                    nama_kota: toTitleCase(data.nama_kota),
                    id_prov: data.id_prov
                }
            })
            return {
                message: 'Berhasil mengedit nama kota',
                data: editedcity
            }
        } catch (error) {
            if(error instanceof ConflictException){
                throw error;
            }
            console.error("Error mengedit kota : ", error)
            throw new InternalServerErrorException("Kesalahan pada server")
        }
    }

    async deleteKota(id_kota:number){
        try {
            const adakota = await this.prisma.cities.findUnique({
                where: {id_kota: id_kota}
            })
            if(!adakota){
                throw new BadRequestException("Kota tidak ditemukan")
            }

            await this.prisma.cities.delete({
                where: {id_kota: id_kota}
            })
            return {
                message: 'Berhasil menghapus kota'
            }
        } catch (error) {
            if(error instanceof ConflictException){
                throw error;
            }
            console.error("Error menghapus kota : ", error)
            throw new InternalServerErrorException("Kesalahan pada server")
        }
    }
}