import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class OperacionSaldoHistorialDto {

    @ApiProperty()
    id_historial: number;

    @ApiProperty()
    @IsNotEmpty()
    cod_operacion: string;

    @ApiProperty()
    @IsNotEmpty()
    persona: string;

    @ApiProperty()
    @IsNotEmpty()
    monto: number;

    @ApiProperty()
    fec_pago: string;

    @ApiProperty()
    @IsNotEmpty()
    user_mod: string;

}