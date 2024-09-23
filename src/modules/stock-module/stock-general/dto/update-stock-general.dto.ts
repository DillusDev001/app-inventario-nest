import { PartialType } from '@nestjs/mapped-types';
import { StockGeneralDto } from './stock-general.dto';

export class UpdateStockGeneralDto extends PartialType(StockGeneralDto) {
    
    cod_producto: string;
    cantidad: number;
    fec_mod: string;

}
