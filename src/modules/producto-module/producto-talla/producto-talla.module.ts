import { Module } from '@nestjs/common';
import { ProductoTallaService } from './producto-talla.service';
import { ProductoTallaController } from './producto-talla.controller';

@Module({
  controllers: [ProductoTallaController],
  providers: [ProductoTallaService],
})
export class ProductoTallaModule {}
