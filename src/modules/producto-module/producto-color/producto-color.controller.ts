import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductoColorService } from './producto-color.service';
import { ProductoColorDto } from './dto/producto-color.dto';
import { UpdateProductoColorDto } from './dto/update-producto-color.dto';

@Controller('producto-color')
export class ProductoColorController {
  constructor(private readonly productoColorService: ProductoColorService) {}

  @Post()
  create(@Body() productoColorDto: ProductoColorDto) {
    return this.productoColorService.create(productoColorDto);
  }
}
