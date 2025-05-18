import { Module } from "@nestjs/common";
import { HospitalController, KotaController, ProvinsiController, SpesialisController } from "./admin.controller";
import { HospitalService, KotaService, ProvinsiService, SpesialisService } from "./admin.service";
import { PrismaModule } from "../prisma/prisma.module";

@Module({
    controllers: [HospitalController, SpesialisController, ProvinsiController, KotaController],
    providers: [HospitalService, SpesialisService, ProvinsiService, KotaService],
    imports: [PrismaModule]
})

export class AdminModule {}