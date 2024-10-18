import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class AlmacenDto {

    @ApiProperty()
    id_almacen: number;

    @ApiProperty()
    @IsNotEmpty()
    id_sucursal: number;

    @ApiProperty()
    @IsNotEmpty()
    nombre: string;

    @ApiProperty()
    @IsNotEmpty()
    direccion: string;

    @ApiProperty()
    @IsNotEmpty()
    telefono: string;

    @ApiProperty()
    @IsNotEmpty()
    descripcion: string;

    @ApiProperty()
    @IsNotEmpty()
    usuario_encargado: string;

    @ApiProperty()
    estado: number;

}
