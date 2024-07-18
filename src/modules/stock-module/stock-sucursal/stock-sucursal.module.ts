import { Module } from '@nestjs/common';
import { StockSucursalService } from './stock-sucursal.service';
import { StockSucursalController } from './stock-sucursal.controller';
import { StockSucursal } from './entities/stock-sucursal.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([StockSucursal])],
  controllers: [StockSucursalController],
  providers: [StockSucursalService],
})
export class StockSucursalModule { }
