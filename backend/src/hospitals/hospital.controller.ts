import { Body, Controller, Post, UploadedFile, UseInterceptors } from "@nestjs/common";
import { DoctorService, JadwalService, PraktikService } from "./hospital.service";
import { CreateDoctorDto } from "./dto/create-doctor.dto";
import { FileInterceptor } from "@nestjs/platform-express";
import * as multer from "multer";
import { CreateJadwalDto } from "./dto/create-jadwal.dto";
import { CreatePraktikDto } from "./dto/create-praktik.dto";

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
        return this.doctorService.CreateDoctor(body, file);
    }
}

@Controller('jadwal')
export class JadwalController{
    constructor(private readonly jadwalService: JadwalService){}

    @Post('new')
    async create(@Body() body: CreateJadwalDto){
        return this.jadwalService.CreateJadwal(body);
    }
}

@Controller('praktik')
export class PraktikController{
    constructor(private readonly praktikService: PraktikService){}

    @Post('new')
    async create(@Body() body: CreatePraktikDto){
        return this.praktikService.createPraktik(body);
    }
}