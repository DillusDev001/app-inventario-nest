import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class ProductoDto {

    @ApiProperty()
    @IsNotEmpty()
    cod_producto: string;

    @ApiProperty()
    cod_hash: string;

    @ApiProperty()
    @IsNotEmpty()
    codigo: string;

    @ApiProperty()
    @IsNotEmpty()
    tipo: string;

    @ApiProperty()
    @IsNotEmpty()
    categoria: string;

    @ApiProperty()
    @IsNotEmpty()
    talla: string;

    @ApiProperty()
    @IsNotEmpty()
    color: string;

    @ApiProperty()
    @IsNotEmpty()
    material: string;

    @ApiProperty()
    @IsNotEmpty()
    sexo: string;

    @ApiProperty()
    descripcion: string;

    @ApiProperty()
    @IsNotEmpty()
    precio_unitario: number;

    @ApiProperty()
    @IsNotEmpty()
    precio_mayor: number;

    @ApiProperty()
    estado: number;

}
