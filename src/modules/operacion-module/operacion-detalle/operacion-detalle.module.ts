import { Module } from '@nestjs/common';
import { OperacionDetalleService } from './operacion-detalle.service';
import { OperacionDetalleController } from './operacion-detalle.controller';
import { OperacionDetalle } from './entities/operacion-detalle.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([OperacionDetalle])],
  controllers: [OperacionDetalleController],
  providers: [OperacionDetalleService],
})
export class OperacionDetalleModule {}
