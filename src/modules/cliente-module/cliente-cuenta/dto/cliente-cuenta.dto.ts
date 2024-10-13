import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class ClienteCuentaDto {

    @ApiProperty()
    @IsNotEmpty()
    id_cliente: number;

    @ApiProperty()
    monto: number;

    @ApiProperty()  
    fec_mod: string;

    @ApiProperty()
    @IsNotEmpty()
    user_mod: string;

}