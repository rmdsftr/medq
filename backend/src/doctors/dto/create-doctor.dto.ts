import { ArrayMinSize, IsArray, IsDateString, IsEmail, IsEnum, IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";
import { $Enums } from "../../../prisma/generated/prisma";

export class CreateDoctorDto{
    @IsNotEmpty()
    @IsString()
    lisensi: string;

    @IsNotEmpty()
    @IsString()
    nama_dokter: string;

    @IsNotEmpty()
    @IsEnum($Enums.gender_enum,  {message: 'Gender hanya Laki-laki atau Perempuan'})
    gender: $Enums.gender_enum;

    @IsNotEmpty()
    @IsDateString()
    tgl_lahir: string;

    @IsNotEmpty()
    @IsEnum($Enums.status_doctor, {message: 'Status dokter tidak boleh kosong'})
    status: $Enums.status_doctor;

    @IsNotEmpty()
    @IsArray()
    @IsString({each:true})
    @ArrayMinSize(1, {message:'Dokter harus memiliki setidaknya 1 spesialis'})
    id_sp: string[];
}

export class updateDoctorDto{
    @IsNotEmpty()
    @IsString()
    nama_dokter: string;

    @IsNotEmpty()
    @IsEnum($Enums.status_doctor, {message: 'Status dokter tidak boleh kosong'})
    status: $Enums.status_doctor;
}

export class AddSPDoctor{
    @IsNotEmpty()
    @IsString()
    id_sp: string;
}