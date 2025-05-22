import { BadRequestException, ConflictException, Injectable, InternalServerErrorException } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreateJadwalDto } from "./dto/create-jadwal.dto";

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