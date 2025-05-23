import { Body, Controller, Delete, Param, Patch, Post } from "@nestjs/common";
import { KotaService } from "./kota.service";
import { CreateKotaDto } from "./dto/create-kota.dto";
import { EditKotaDto } from "./dto/edit-kota.dto";

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