import { Type } from "class-transformer";
import { IsNumber, Max, Min } from "class-validator";

export class NearestHospitalDto{
    @Type(() => Number)
    @IsNumber()
    @Min(-90)
    @Max(90)
    lat: number;

    @Type(() => Number)
    @IsNumber()
    @Min(-180)
    @Max(180)
    long: number;

    @Type(() => Number)
    @IsNumber()
    @Min(1)
    @Max(200)
    radius: number=10;

    @Type(() => Number)
    @IsNumber()
    @Min(1)
    page: number=1;

    @Type(() => Number)
    @IsNumber()
    @Min(1)
    limit: number=10;
}