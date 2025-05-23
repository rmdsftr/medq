import { Module } from "@nestjs/common";
import { DokterController } from "./dokter.controller";
import { DokterService } from "./dokter.service";
import { PrismaModule } from "../prisma/prisma.module";

@Module({
    controllers: [DokterController],
    providers: [DokterService],
    imports: [PrismaModule]
})
export class DokterModule{}