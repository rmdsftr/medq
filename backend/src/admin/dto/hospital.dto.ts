import { IsEnum, IsLatitude, IsLongitude, IsNotEmpty, IsNumber, IsString, MaxLength, MinLength } from "class-validator";
import { $Enums } from "../../../prisma/generated/prisma";

export class CreateHospitalDto{
    @IsNotEmpty()
    @IsString()
    id_rs: string;

    @IsNotEmpty()
    @IsString()
    @MaxLength(12)
    @MinLength(8)
    sandi_admin: string;

    @IsNotEmpty()
    @IsString()
    nama_rs: string;

    @IsNotEmpty()
    @IsEnum($Enums.tipe_enum, {message: 'Tipe RS cuma A,B,C, atau D'})
    tipe: $Enums.tipe_enum;

    @IsNotEmpty()
    @IsEnum($Enums.status_rs)
    status: $Enums.status_rs;

    @IsNotEmpty()
    @IsString()
    alamat: string;

    @IsNotEmpty()
    @IsString()
    kode_pos: string;

    @IsNotEmpty()
    @IsNumber()
    id_kota: number;

    @IsNotEmpty()
    @IsNumber()
    id_prov: number;

    @IsNotEmpty()
    @IsLatitude()
    latitude: number;

    @IsNotEmpty()
    @IsLongitude()
    longitude: number;
}