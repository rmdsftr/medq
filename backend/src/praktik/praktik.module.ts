import { Module } from "@nestjs/common";
import { PraktikController } from "./praktik.controller";
import { PraktikService } from "./praktik.service";
import { PrismaModule } from "../prisma/prisma.module";

@Module({
    controllers: [PraktikController],
    providers: [PraktikService],
    imports: [PrismaModule]
})

export class PraktikModule {}