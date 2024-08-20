import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class TallaDto {

    @ApiProperty()
    id_talla: number;

    @ApiProperty()
    @IsNotEmpty()
    talla: string;

    @ApiProperty()
    @IsNotEmpty()
    user_crea: string;

    @ApiProperty()
    fec_crea: string;

}
