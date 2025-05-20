import { Body, Controller, Delete, Param, Patch, Post, UploadedFile, UseInterceptors } from "@nestjs/common";
import { DoctorService, JadwalService, PraktikService } from "./hospital.service";
import { AddSPDoctor, CreateDoctorDto, updateDoctorDto } from "./dto/doctor.dto";
import { FileInterceptor } from "@nestjs/platform-express";
import * as multer from "multer";
import { CreateJadwalDto } from "./dto/jadwal.dto";
import { CreatePraktikDto } from "./dto/praktik.dto";

@Controller('doctors')
export class DoctorController{
    constructor(private readonly doctorService: DoctorService){}

    @Post('register')
    @UseInterceptors(FileInterceptor('foto',{
        storage: multer.memoryStorage()
    }))
    async create(
        @Body() body:CreateDoctorDto,
        @UploadedFile() file: Express.Multer.File
    ){
        if(typeof body.id_sp === 'string'){
            body.id_sp = JSON.parse(body.id_sp);
        }
        return this.doctorService.CreateDoctor(body, file);
    }

    @Patch('edit/:lisensi')
    async update(
        @Param('lisensi') lisensi:string,
        @Body() body: updateDoctorDto
    ){
        return this.doctorService.updateDoctor(lisensi, body);
    }

    @Post('add/:lisensi')
    async addSP(@Body() body:AddSPDoctor, @Param('lisensi') lisensi:string){
        return this.doctorService.addSpDoctor(body, lisensi)
    }

    @Delete('delete/:lisensi/:id_sp')
    async deleteSP(@Param('lisensi') lisensi:string, @Param('id_sp') id_sp:string){
        return this.doctorService.deleteSPDoctor(lisensi,id_sp);
    }
}

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

@Controller('praktik')
export class PraktikController{
    constructor(private readonly praktikService: PraktikService){}

    @Post('new')
    async create(@Body() body: CreatePraktikDto){
        return this.praktikService.createPraktik(body);
    }

    @Delete('delete/:id_prak')
    async delete(@Param('id_prak') id_prak:string){
        return this.praktikService.deletePraktik(id_prak);
    }
}