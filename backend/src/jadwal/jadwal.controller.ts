import { Body, Controller, Delete, Param, Post } from "@nestjs/common";
import { CreateJadwalDto } from "./dto/create-jadwal.dto";
import { JadwalService } from "./jadwal.service";

@Controller('jadwal')
export class JadwalController{
    constructor(private readonly jadwalService: JadwalService){}

    @Post('new')
    async create(@Body() body: CreateJadwalDto){
        return this.jadwalService.CreateJadwal(body);
    }

    @Delete('delete/:id_sched')
    async delete(@Param('id_sched') id_sched:string){
        return this.jadwalService.deleteJadwal(id_sched);
    }
}
