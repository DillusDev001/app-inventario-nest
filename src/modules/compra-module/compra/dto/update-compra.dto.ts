import { PartialType } from '@nestjs/mapped-types';
import { CompraDto } from './compra.dto';

export class UpdateCompraDto extends PartialType(CompraDto) {}
