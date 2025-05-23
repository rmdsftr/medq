import { Controller, Get, Param, Query } from "@nestjs/common";
import { HospitalService } from "./hospitals.service";
import { NearestHospitalDto } from "./dto/nearest-hospital.dto";

@Controller('hospitals')
export class HospitalController{
    constructor(private readonly hospitalService: HospitalService){}

    @Get()
    async select(@Query() query:NearestHospitalDto){
        return this.hospitalService.all(
            query.lat, query.long, query.radius, query.page, query.limit
        )
    }

    @Get('/:id_rs')
    async selectRS(@Param('id_rs') id_rs:string){
        return this.hospitalService.selectRS(id_rs);
    }

    @Get('/:id_rs/:id_sp')
    async selectPoli(@Param('id_rs') id_rs:string, @Param('id_sp') id_sp:string){
        return this.hospitalService.selectPoli(id_rs, id_sp);
    }
}
