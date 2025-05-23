import { Body, Controller, Delete, Param, Patch, Post, UploadedFile, UseInterceptors } from "@nestjs/common";
import { DoctorService } from "./doctors.service";
import { AddSPDoctor, CreateDoctorDto, updateDoctorDto } from "./dto/create-doctor.dto";
import { FileInterceptor } from "@nestjs/platform-express";
import * as multer from "multer";

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