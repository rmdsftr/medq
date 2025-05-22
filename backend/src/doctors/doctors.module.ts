import { Module } from "@nestjs/common";
import { DoctorController } from "./doctors.controller";
import { DoctorService } from "./doctors.service";
import { PrismaModule } from "../prisma/prisma.module";

@Module({
    controllers: [DoctorController],
    providers: [DoctorService],
    imports: [PrismaModule]
})

export class DoctorModule{}
