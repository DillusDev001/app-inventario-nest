import { Module } from '@nestjs/common';
import { StockGeneralService } from './stock-general.service';
import { StockGeneralController } from './stock-general.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StockGeneral } from './entities/stock-general.entity';

@Module({
  imports: [TypeOrmModule.forFeature([StockGeneral])],
  controllers: [StockGeneralController],
  providers: [StockGeneralService],
})
export class StockGeneralModule { }
