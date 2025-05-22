import { BadRequestException, ConflictException, Injectable, InternalServerErrorException } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AddSPDoctor, CreateDoctorDto, updateDoctorDto } from "./dto/create-doctor.dto";
import * as bcrypt from 'bcrypt';
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