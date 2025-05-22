import { BadRequestException, ConflictException, Injectable, InternalServerErrorException } from "@nestjs/common"
import { PrismaService } from "../prisma/prisma.service"
import { CreateKotaDto } from "./dto/create-kota.dto"
import { EditKotaDto } from "./dto/edit-kota.dto"
import { toTitleCase } from "../utils/title.utils"

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