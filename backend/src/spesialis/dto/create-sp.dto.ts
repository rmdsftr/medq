import { IsNotEmpty, IsString } from "class-validator";

export class CreateSpDto{
    @IsNotEmpty()
    @IsString()
    spesialis: string;
}