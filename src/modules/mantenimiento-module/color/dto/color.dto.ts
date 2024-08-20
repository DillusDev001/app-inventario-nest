import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class ColorDto {

    @ApiProperty()
    id_color: number;

    @ApiProperty()
    @IsNotEmpty()
    color: string;

    @ApiProperty()
    @IsNotEmpty()
    user_crea: string;

    @ApiProperty()
    fec_crea: string;

}
