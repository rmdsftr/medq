import { Module } from "@nestjs/common";
import { HospitalController } from "./hospitals.controller";
import { HospitalService } from "./hospitals.service";
import { PrismaModule } from "../prisma/prisma.module";

@Module({
    controllers: [HospitalController],
    providers: [HospitalService],
    imports: [PrismaModule]
})

export class HospitalModule {}