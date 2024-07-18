import { PartialType } from '@nestjs/swagger';
import { ProductoTallaDto } from './producto-talla.dto';

export class UpdateProductoTallaDto extends PartialType(ProductoTallaDto) {}
