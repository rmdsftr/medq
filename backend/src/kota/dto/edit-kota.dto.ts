import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class EditKotaDto{
    @IsNotEmpty()    
    @IsString()
    nama_kota: string;

    @IsNotEmpty()
    @IsNumber()
    id_prov: number;
}