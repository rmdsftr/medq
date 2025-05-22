import { Module } from "@nestjs/common";
import { KotaController } from "./kota.controller";
import { KotaService } from "./kota.service";
import { PrismaModule } from "../prisma/prisma.module";

@Module({
    controllers: [KotaController],
    providers: [KotaService],
    imports: [PrismaModule]
})

export class KotaModule {}