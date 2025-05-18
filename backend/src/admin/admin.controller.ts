import { Body, Controller, Post, UploadedFile, UseInterceptors } from "@nestjs/common";
import { HospitalService, KotaService, ProvinsiService, SpesialisService } from "./admin.service";
import { CreateHospitalDto } from "./dto/hospital.dto";
import { CreateSpDto } from "./dto/spesialis.dto";
import { FileInterceptor } from "@nestjs/platform-express";
import * as multer from "multer";
import { CreateProvinsiDto } from "./dto/provinsi.dto";
import { CreateKotaDto } from "./dto/kota.dto";

@Controller('hospitals')
export class HospitalController{
    constructor(private readonly hospitalService : HospitalService){}

    @Post('register')
    @UseInterceptors(FileInterceptor('foto', {
        storage: multer.memoryStorage()
    }))
    async create(
        @UploadedFile() file: Express.Multer.File, 
        @Body() body: CreateHospitalDto){
        return this.hospitalService.createHospital(body, file);
    }
}

@Controller('spesialis')
export class SpesialisController{
    constructor(private readonly spesialisService: SpesialisService){}

    @Post('create')
    async create(@Body() body: CreateSpDto){
        return this.spesialisService.createSP(body);
    }
}

@Controller('provinsi')
export class ProvinsiController{
    constructor(private readonly provinsiService: ProvinsiService){}

    @Post('new')
    async create(@Body() body: CreateProvinsiDto){
        return this.provinsiService.CreateProvinsi(body);
    }
}

@Controller('kota')
export class KotaController{
    constructor(private readonly kotaService: KotaService){}

    @Post('new')
    async create(@Body() body: CreateKotaDto){
        return this.kotaService.CreateKota(body);
    }
}