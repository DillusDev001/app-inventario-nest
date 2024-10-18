import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class OperacionDto {

    @ApiProperty()
    @IsNotEmpty()
    cod_operacion: string;

    @ApiProperty()
    @IsNotEmpty()
    id_cliente: number;

    @ApiProperty()
    @IsNotEmpty()
    user_vendedor: string;

    @ApiProperty()
    fec_operacion: string;

    @ApiProperty()
    nro_factura: string;

    @ApiProperty()
    observacion: string;

    @ApiProperty()
    ciudad_envio: string;

    @ApiProperty()
    @IsNotEmpty()
    precio_total: number;

    @ApiProperty()
    @IsNotEmpty()
    descuento: number;

    @ApiProperty()
    @IsNotEmpty()
    precio_pagar: number;

    @ApiProperty()
    @IsNotEmpty()
    estado: string;

}
