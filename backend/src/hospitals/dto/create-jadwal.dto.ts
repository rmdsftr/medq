import { IsEnum, IsNotEmpty, Matches} from "class-validator";
import { $Enums } from "../../../prisma/generated/prisma";

export class CreateJadwalDto{
    @IsNotEmpty()
    @IsEnum($Enums.hari_enum, {message: 'hari yang ada senin-minggu'})
    hari: $Enums.hari_enum;

    @IsNotEmpty()
    @Matches(/^([01]\d|2[0-3]):([0-5]\d)$/, {message: 'Format waktu harus HH:mm (contoh: 08:00)'})
    start_session: string;

    @IsNotEmpty()
    @Matches(/^([01]\d|2[0-3]):([0-5]\d)$/, {message: 'Format waktu harus HH:mm (contoh: 14:30)'})
    end_session: string;
}