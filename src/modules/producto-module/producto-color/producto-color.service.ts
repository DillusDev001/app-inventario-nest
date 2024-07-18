import { Injectable } from '@nestjs/common';
import { ProductoColorDto } from './dto/producto-color.dto';
import { UpdateProductoColorDto } from './dto/update-producto-color.dto';

@Injectable()
export class ProductoColorService {
  create(productoColorDto: ProductoColorDto) {
    return 'This action adds a new productoColor';
  }
}
