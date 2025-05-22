import { IsNotEmpty, IsString } from "class-validator";

export class EditSpDto{
    @IsNotEmpty()
    @IsString()
    spesialis: string;
}