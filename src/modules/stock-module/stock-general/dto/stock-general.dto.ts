import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class StockGeneralDto {

    @ApiProperty()
    @IsNotEmpty()
    cod_producto: string;

    @ApiProperty()
    @IsNotEmpty()
    cantidad: string;

    @ApiProperty()
    fec_mod: string;

}
