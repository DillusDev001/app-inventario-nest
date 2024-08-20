import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class StockSucursalDto {

    @ApiProperty()
    @IsNotEmpty()
    cod_producto: string;

    @ApiProperty()
    @IsNotEmpty()
    id_almacen: number;

    @ApiProperty()
    @IsNotEmpty()
    cantidad: number;

    @ApiProperty()
    fec_mod: string;

}
