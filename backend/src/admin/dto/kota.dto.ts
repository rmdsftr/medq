import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateKotaDto{
    @IsNotEmpty()    
    @IsString()
    nama_kota: string;

    @IsNotEmpty()
    @IsNumber()
    id_prov: number;
}