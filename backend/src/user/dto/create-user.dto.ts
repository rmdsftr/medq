import { IsDateString, IsEmail, IsEnum, IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";
import { $Enums } from "../../../prisma/generated/prisma";


export class CreateUserDto {
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    nama: string;

    @IsNotEmpty()
    @IsString()
    @MaxLength(12)
    @MinLength(8)
    sandi: string;

    @IsNotEmpty()
    @IsEnum($Enums.gender_enum, {message: 'gender harus antara laki-laki atau perempuan'})
    gender: $Enums.gender_enum;

    @IsNotEmpty()
    @IsDateString()
    tgl_lahir: string
}