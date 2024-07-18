import { Module } from '@nestjs/common';
import { VentaPagoService } from './venta-pago.service';
import { VentaPagoController } from './venta-pago.controller';
import { VentaPago } from './entities/venta-pago.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([VentaPago])],
  controllers: [VentaPagoController],
  providers: [VentaPagoService],
})
export class VentaPagoModule { }
