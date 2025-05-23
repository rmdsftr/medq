import { Body, Controller, Delete, Param, Post } from "@nestjs/common";
import { PraktikService } from "./praktik.service";
import { CreatePraktikDto } from "./dto/create-praktik.dto";

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