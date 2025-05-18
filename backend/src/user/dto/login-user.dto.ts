import { IsEmail, IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class selectUser{
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    @MaxLength(12)
    @MinLength(8)
    sandi: string;
}