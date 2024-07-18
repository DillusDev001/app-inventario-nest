import { PartialType } from '@nestjs/mapped-types';
import { CompraDetalleDto } from './compra-detalle.dto';

export class UpdateCompraDetalleDto extends PartialType(CompraDetalleDto) {}
