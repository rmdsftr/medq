import { BadRequestException, ConflictException, Injectable, InternalServerErrorException } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { toTitleCase } from "../utils/title.utils";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { CreateProvinsiDto } from "./dto/create-prov.dto";
import { UpdateProvinsiDto } from "./dto/edit-prov.dto";

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