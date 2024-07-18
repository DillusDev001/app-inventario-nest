import { PartialType } from '@nestjs/mapped-types';
import { VentaDto } from './venta.dto';

export class UpdateVentaDto extends PartialType(VentaDto) {}
