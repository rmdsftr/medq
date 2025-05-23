import { IsNotEmpty, IsString } from "class-validator";

export class CreateProvinsiDto{
    @IsNotEmpty()
    @IsString()
    nama_prov: string;
}