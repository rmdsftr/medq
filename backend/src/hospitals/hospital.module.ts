import { Module } from "@nestjs/common";
import { DoctorController, JadwalController, PraktikController } from "./hospital.controller";
import { DoctorService, JadwalService, PraktikService } from "./hospital.service";
import { PrismaModule } from "../prisma/prisma.module";

@Module({
    controllers: [DoctorController, JadwalController, PraktikController],
    providers: [DoctorService, JadwalService, PraktikService],
    imports: [PrismaModule]
})

export class HospitalModule{}
