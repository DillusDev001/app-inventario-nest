import { PartialType } from '@nestjs/swagger';
import { ProductoColorDto } from './producto-color.dto';

export class UpdateProductoColorDto extends PartialType(ProductoColorDto) {}
