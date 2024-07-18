import { PartialType } from '@nestjs/mapped-types';
import { VentaPagoDto } from './venta-pago.dto';

export class UpdateVentaPagoDto extends PartialType(VentaPagoDto) {}
