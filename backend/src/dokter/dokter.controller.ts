import { Controller, Get, Param, Query } from "@nestjs/common";
import { DokterService } from "./dokter.service";

@Controller('')
export class DokterController{
    constructor(private readonly dokterService: DokterService){}

    @Get('/:id_rs/:id_sp')
    async selectDoc(
        @Param('id_rs') id_rs:string,
        @Param('id_sp') id_sp:string, 
        @Query('lisensi') lisensi:string){
        return this.dokterService.selectDoc(id_rs, id_sp, lisensi);
    }
}