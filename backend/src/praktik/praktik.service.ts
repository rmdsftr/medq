import { BadRequestException, ConflictException, Injectable, InternalServerErrorException } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreatePraktikDto } from "./dto/create-praktik.dto";

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