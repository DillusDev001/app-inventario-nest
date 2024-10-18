import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class OperacionDetalleDto {

    @ApiProperty()
    @IsNotEmpty()
    cod_operacion: string;

    @ApiProperty()
    @IsNotEmpty()
    cod_producto: string;

    @ApiProperty()
    @IsNotEmpty()
    sec: number;

    @ApiProperty()
    @IsNotEmpty()
    cantidad: number;

    @ApiProperty()
    @IsNotEmpty()
    precio_unitario: number;

    @ApiProperty()
    @IsNotEmpty()
    sub_total: number;

}
