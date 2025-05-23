import { Module } from "@nestjs/common";
import { ProvinsiController } from "./provinsi.controller";
import { ProvinsiService } from "./provinsi.service";
import { PrismaModule } from "../prisma/prisma.module";

@Module({
    controllers: [ProvinsiController],
    providers: [ProvinsiService],
    imports: [PrismaModule]
})

export class ProvinsiModule {}