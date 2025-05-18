import { Module } from "@nestjs/common";
import { AuthController } from "./user.controller";
import { AuthService } from "./user.service";
import { PrismaModule } from "../prisma/prisma.module";

@Module({
    controllers: [AuthController],
    providers: [AuthService],
    imports: [PrismaModule]
})

export class UserModule {}