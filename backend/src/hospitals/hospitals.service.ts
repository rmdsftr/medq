import { BadRequestException, ConflictException, Injectable, InternalServerErrorException } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class HospitalService{
    constructor(private prisma: PrismaService){}

    async all(lat:number, long:number, radius:number, page:number, limit:number){
        try{
            const skip = (page -1) * limit;

            const rs = await this.prisma.$queryRaw`
                SELECT *, (
                    6371 * acos(
                    cos(radians(${lat}))
                    * cos(radians(latitude))
                    * cos(radians(longitude) - radians(${long}))
                    + sin(radians(${lat})) * sin(radians(latitude))
                    )
                ) AS distance
                FROM "hospitals"
                WHERE (
                    6371 * acos(
                    cos(radians(${lat}))
                    * cos(radians(latitude))
                    * cos(radians(longitude) - radians(${long}))
                    + sin(radians(${lat})) * sin(radians(latitude))
                    )
                ) < ${radius}
                ORDER BY distance ASC
                LIMIT ${limit} OFFSET ${skip};
                `;

                return {
                    message: 'Berhasil mengambil data rumah sakit',
                    data : rs
                }
        } catch(error){
            if(error instanceof ConflictException){
                throw error;
            }
            console.error("Error mengambil data rumah sakit: ", error)
            throw new InternalServerErrorException("Kesalahan pada server")
        }
    }

    async selectRS(id_rs:string){
        try {
            const poli = await this.prisma.practices.groupBy({
                by: ['id_sp'],
                _count: {
                    lisensi: true
                },
                where: {id_rs: id_rs}
            })
            
            if(!poli){
                throw new BadRequestException("Data poli dan jumlah dokter tidak ditemukan")
            }

            return {
                message : 'data rumah sakit berhasil ditemukan',
                data : poli
            }
        } catch (error) {
            if(error instanceof ConflictException){
                throw error;
            }
            console.error("Error mendapatkan data rumah sakit : ", error)
            throw new InternalServerErrorException("Kesalahan pada server")
        }
    }

    async selectPoli(id_rs:string, id_sp:string){
        try {
            const listdoc = await this.prisma.doctors.findMany({
                where: {
                    practices: {
                        some: {
                            id_rs: id_rs,
                            id_sp: id_sp
                        }
                    }
                }
            })

            if(!listdoc){
                throw new BadRequestException("Data dokter poli tidak ditemukan")
            }

            return{
                message : "berikut list dokter masing-masing poli",
                data : listdoc
            }
        } catch (error) {
            if(error instanceof ConflictException){
                throw error;
            }
            console.error("Error mendapatkan list dokter")
            throw new InternalServerErrorException("Kesalahan pada server")
        }
    }
}