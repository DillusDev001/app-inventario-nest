import { PartialType } from '@nestjs/mapped-types';
import { VentaDetalleDto } from './venta-detalle.dto';

export class UpdateVentaDetalleDto extends PartialType(VentaDetalleDto) {}
