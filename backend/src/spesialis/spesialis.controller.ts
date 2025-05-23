import { Body, Controller, Delete, Param, Patch, Post } from "@nestjs/common";
import { CreateSpDto } from "./dto/create-sp.dto";
import { SpesialisService } from "./spesialis.service";
import { EditSpDto } from "./dto/edit-sp.dto";

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