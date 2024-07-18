import { Module } from '@nestjs/common';
import { ProductoColorService } from './producto-color.service';
import { ProductoColorController } from './producto-color.controller';

@Module({
  controllers: [ProductoColorController],
  providers: [ProductoColorService],
})
export class ProductoColorModule {}
