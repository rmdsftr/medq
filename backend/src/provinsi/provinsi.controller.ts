import { Body, Controller, Delete, Param, Patch, Post } from "@nestjs/common";
import { ProvinsiService } from "./provinsi.service";
import { CreateProvinsiDto } from "./dto/create-prov.dto";
import { UpdateProvinsiDto } from "./dto/edit-prov.dto";

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