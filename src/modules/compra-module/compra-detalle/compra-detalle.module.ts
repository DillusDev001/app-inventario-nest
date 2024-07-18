import { Module } from '@nestjs/common';
import { CompraDetalleService } from './compra-detalle.service';
import { CompraDetalleController } from './compra-detalle.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompraDetalle } from './entities/compra-detalle.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CompraDetalle])],
  controllers: [CompraDetalleController],
  providers: [CompraDetalleService],
})
export class CompraDetalleModule { }
