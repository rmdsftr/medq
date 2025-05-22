import { IsEnum, IsNotEmpty } from "class-validator";
import { $Enums } from "../../../prisma/generated/prisma";

export class EditAdminDto{
    @IsNotEmpty()
    @IsEnum($Enums.status_rs, {message:'aktif, nonaktif, suspend'})
    status: $Enums.status_rs;
}