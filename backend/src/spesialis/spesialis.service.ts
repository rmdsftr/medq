import { BadRequestException, Injectable, InternalServerErrorException } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { toTitleCase } from "../utils/title.utils";
import { CreateSpDto } from "./dto/create-sp.dto";
import { EditSpDto } from "./dto/edit-sp.dto";

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