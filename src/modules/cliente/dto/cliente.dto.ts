import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class ClienteDto {

    @ApiProperty()
    id_cliente: number;

    @ApiProperty()
    @IsNotEmpty()
    cliente: string;

    @ApiProperty()
    razon: string;

    @ApiProperty()
    nit: string;

    @ApiProperty()
    celular: string;

}