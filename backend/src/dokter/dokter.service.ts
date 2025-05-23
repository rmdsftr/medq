import { BadRequestException, ConflictException, Injectable, InternalServerErrorException } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class DokterService{
    constructor(private prisma: PrismaService){}

    async selectDoc(id_rs:string, id_sp:string, lisensi:string){
        try {
            const data_doc = await this.prisma.doctors.findMany({
                where: {lisensi:lisensi},
                select: {
                    lisensi: true,
                    nama_dokter: true,
                    gender: true,
                    status: true,
                    foto: true,
                    detail_sp: {
                        select: {
                            specialists: {
                                select: {
                                    spesialis: true,
                                    practices: {
                                        select: {
                                            hospitals: {
                                                select: {
                                                    nama_rs: true
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            })

            if(!data_doc){
                throw new BadRequestException("data dokter tidak ditemukan")
            }

            const spesialisSet = new Set();
            const hospitalSet = new Set();

            for (const d of data_doc){
                for(const s of d.detail_sp){
                    const sp = s.specialists;
                    if(sp?.spesialis){
                        spesialisSet.add(sp.spesialis);
                    }
                    
                    for(const p of sp?.practices ?? []){
                        const pr = p.hospitals?.nama_rs;
                        if(pr){
                            hospitalSet.add(pr);
                        }
                    }
                }
            }

            const jadwal = await this.prisma.practices.findMany({
                where: {
                    id_rs: id_rs,
                    lisensi: lisensi,
                    id_sp: id_sp,
                }, select: {
                    schedules: {
                        select: {
                            hari: true,
                            start_session: true,
                            end_session: true
                        }
                    }
                }
            })

            const result = {
                lisensi: data_doc[0]?.lisensi,
                nama_dokter: data_doc[0]?.nama_dokter,
                gender: data_doc[0]?.gender,
                status: data_doc[0]?.status,
                foto: data_doc[0]?.foto,
                spesialis: Array.from(spesialisSet),
                rumah_sakit: Array.from(hospitalSet),
                jadwal: jadwal
            }

            return {
                message: 'berikut detail data dokter',
                data: result
            }

        } catch (error) {
            if(error instanceof ConflictException){
                throw error;
            }
            console.error("error mendapatkan data dokter : ",error)
            throw new InternalServerErrorException("Kesalahan pada server")
        }
    }
}