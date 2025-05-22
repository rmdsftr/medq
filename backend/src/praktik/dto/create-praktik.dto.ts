import { IsNotEmpty, IsString } from "class-validator";

export class CreatePraktikDto{
    @IsNotEmpty()
    @IsString()
    id_rs: string;

    @IsNotEmpty()
    @IsString()
    id_sp: string;

    @IsNotEmpty()
    @IsString()
    lisensi: string;

    @IsNotEmpty()
    @IsString()
    id_sched: string;
}