import { IsNotEmpty, IsString } from "class-validator";

export class UpdateProvinsiDto{
    @IsNotEmpty()
    @IsString()
    nama_prov: string;
}