import { Module } from '@nestjs/common';
import { VentaDetalleService } from './venta-detalle.service';
import { VentaDetalleController } from './venta-detalle.controller';
import { VentaDetalle } from './entities/venta-detalle.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([VentaDetalle])],
  controllers: [VentaDetalleController],
  providers: [VentaDetalleService],
})
export class VentaDetalleModule { }
