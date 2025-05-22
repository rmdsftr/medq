import { BadRequestException, ConflictException, Injectable, InternalServerErrorException, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreateAdminDto } from "./dto/create-admin.dto";
import { EditAdminDto } from "./dto/edit-admin.dto";
import * as bcrypt from 'bcrypt';
import { toTitleCase } from "../utils/title.utils";

@Injectable()
export class AdminService{
    constructor(private prisma: PrismaService){}

    async create(data: CreateAdminDto, file: Express.Multer.File){
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

    async EditStatus(data: EditAdminDto, id_rs:string){
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

    async Delete(id_rs: string){
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