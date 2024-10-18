import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class OperacionPagoDto {

    @ApiProperty()
    @IsNotEmpty()
    cod_operacion: string;

    @ApiProperty()
    @IsNotEmpty()
    sec: number;

    @ApiProperty()
    @IsNotEmpty()
    metodo_pago: number;

    @ApiProperty()
    @IsNotEmpty()
    monto: number;

    @ApiProperty()
    url_imagen: string;

}