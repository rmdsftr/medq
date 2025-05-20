import { Body, Controller, Delete, Param, Patch, Post, UploadedFile, UseInterceptors } from "@nestjs/common";
import { HospitalService, KotaService, ProvinsiService, SpesialisService } from "./admin.service";
import { CreateHospitalDto, EditStatusRSDto } from "./dto/hospital.dto";
import { CreateSpDto, EditSpDto } from "./dto/spesialis.dto";
import { FileInterceptor } from "@nestjs/platform-express";
import * as multer from "multer";
import { CreateProvinsiDto, UpdateProvinsiDto } from "./dto/provinsi.dto";
import { CreateKotaDto, EditKotaDto } from "./dto/kota.dto";

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

    @Patch('edit/:id_rs')
    async statusHospital(
        @Body() body: EditStatusRSDto, @Param('id_rs') id_rs:string
    ){
        return this.hospitalService.EditStatusHospital(body, id_rs);
    }

    @Delete('delete/:id_rs')
    async deleteHospital(@Param('id_rs') id_rs:string){
        return this.hospitalService.DeleteHospital(id_rs);
    }
}

@Controller('spesialis')
export class SpesialisController{
    constructor(private readonly spesialisService: SpesialisService){}

    @Post('create')
    async create(@Body() body: CreateSpDto){
        return this.spesialisService.createSP(body);
    }

    @Patch('edit/:id_sp')
    async edit(
        @Body() body: EditSpDto, @Param('id_sp') id_sp:string
    ){
        return this.spesialisService.editSP(body, id_sp);
    }

    @Delete('delete/:id_sp')
    async delete(@Param('id_sp') id_sp:string){
        return this.spesialisService.deleteSP(id_sp);
    }
}

@Controller('provinsi')
export class ProvinsiController{
    constructor(private readonly provinsiService: ProvinsiService){}

    @Post('new')
    async create(@Body() body: CreateProvinsiDto){
        return this.provinsiService.CreateProvinsi(body);
    }

    @Patch('edit/:id_prov')
    async update(@Body() body: UpdateProvinsiDto, @Param('id_prov') id_prov:number){
        return this.provinsiService.EditProvinsi(body, id_prov);
    }

    @Delete('delete/:id_prov')
    async delete(@Param('id_prov') id_prov:number){
        return this.provinsiService.deleteProvinsi(id_prov)
    }
}

@Controller('kota')
export class KotaController{
    constructor(private readonly kotaService: KotaService){}

    @Post('new')
    async create(@Body() body: CreateKotaDto){
        return this.kotaService.CreateKota(body);
    }

    @Patch('edit/:id_kota')
    async edit(@Body() body:EditKotaDto, @Param('id_kota') id_kota:number){
        return this.kotaService.EditKota(body, id_kota);
    }

    @Delete('delete/:id_kota')
    async delete(@Param('id_kota') id_kota:number){
        return this.kotaService.deleteKota(id_kota);
    }
}