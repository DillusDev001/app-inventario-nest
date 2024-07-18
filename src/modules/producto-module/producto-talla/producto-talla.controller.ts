import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductoTallaService } from './producto-talla.service';
import { ProductoTallaDto } from './dto/producto-talla.dto';
import { UpdateProductoTallaDto } from './dto/update-producto-talla.dto';

@Controller('producto-talla')
export class ProductoTallaController {
  constructor(private readonly productoTallaService: ProductoTallaService) {}

  @Post()
  create(@Body() productoTallaDto: ProductoTallaDto) {
    return this.productoTallaService.create(productoTallaDto);
  }
}
