import { Module } from '@nestjs/common';
import { StockGeneralService } from './stock-general.service';
import { StockGeneralController } from './stock-general.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StockGeneral } from './entities/stock-general.entity';
import { ProductoService } from 'src/modules/producto/producto.service';
import { Producto } from 'src/modules/producto/entities/producto.entity';
import { AuthService } from 'src/common/services/auth.service';

@Module({
  imports: [TypeOrmModule.forFeature([StockGeneral]), TypeOrmModule.forFeature([Producto])],
  controllers: [StockGeneralController],
  providers: [StockGeneralService, ProductoService, AuthService],
})
export class StockGeneralModule { }
