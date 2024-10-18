import { PartialType } from '@nestjs/swagger';
import { OperacionDetalleDto } from './operacion-detalle.dto';
import { Column, PrimaryColumn } from 'typeorm';

export class UpdateOperacionDetalleDto extends PartialType(OperacionDetalleDto) {

    cod_operacion: string;
    cod_producto: string;
    sec: number;
    cantidad: number;
    precio_unitario: number;
    sub_total: number;
}
