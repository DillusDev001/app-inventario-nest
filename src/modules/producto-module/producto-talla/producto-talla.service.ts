import { Injectable } from '@nestjs/common';
import { ProductoTallaDto } from './dto/producto-talla.dto';
import { UpdateProductoTallaDto } from './dto/update-producto-talla.dto';

@Injectable()
export class ProductoTallaService {
  create(productoTallaDto: ProductoTallaDto) {
    return 'This action adds a new productoTalla';
  }
}
