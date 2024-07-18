import { PartialType } from '@nestjs/mapped-types';
import { StockSucursalDto } from './stock-sucursal.dto';

export class UpdateStockSucursalDto extends PartialType(StockSucursalDto) {}
