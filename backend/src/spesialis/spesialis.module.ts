import { Module } from "@nestjs/common";
import { SpesialisController } from "./spesialis.controller";
import { SpesialisService } from "./spesialis.service";
import { PrismaModule } from "../prisma/prisma.module";

@Module({
    controllers: [SpesialisController],
    providers: [SpesialisService],
    imports: [PrismaModule]
})
export class SpesialisModule {}