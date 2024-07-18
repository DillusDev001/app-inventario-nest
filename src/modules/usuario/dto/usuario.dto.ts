import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class UsuarioDto {

    @ApiProperty()
    @IsNotEmpty()
    usuario: string;

    @ApiProperty()
    @IsNotEmpty()
    nombres: string;

    @ApiProperty()
    @IsNotEmpty()
    apellidos: string;

    @ApiProperty()
    @IsNotEmpty()
    password: string;

    @ApiProperty()
    @IsNotEmpty()
    pregunta: string;

    @ApiProperty()
    @IsNotEmpty()
    respuesta: string;

    @ApiProperty()
    @IsNotEmpty()
    celular: string;

    @ApiProperty()
    @IsNotEmpty()
    sexo: string;

    @ApiProperty()
    @IsNotEmpty()
    rol: string;

    @ApiProperty()
    @IsNotEmpty()
    autorizacion: number;

    @ApiProperty()
    estado: number;

}