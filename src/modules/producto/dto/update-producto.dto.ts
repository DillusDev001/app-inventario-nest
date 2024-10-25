import { PartialType } from '@nestjs/mapped-types';
import { ProductoDto } from './producto.dto';

export class UpdateProductoDto extends PartialType(ProductoDto) {

    id_producto: number
    cod_producto: string;
    cod_hash: string;
    codigo: string;
    tipo: string;
    categoria: string;
    talla: string;
    color: string;
    material: string;
    sexo: string;
    descripcion: string;
    precio_unitario: number;
    precio_mayor: number;
    estado: number;

}
