import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CategoriaDto {

    @ApiProperty()
    id_categoria: number;

    @ApiProperty()
    @IsNotEmpty()
    categoria: string;

    @ApiProperty()
    @IsNotEmpty()
    user_crea: string;

    @ApiProperty()
    fec_crea: string;

}
