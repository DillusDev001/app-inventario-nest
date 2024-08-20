import { PartialType } from '@nestjs/mapped-types';
import { StockSucursalDto } from './stock-sucursal.dto';

export class UpdateStockSucursalDto extends PartialType(StockSucursalDto) {

    cod_producto: string;
    id_almacen: number;
    cantidad: number;
    fec_mod: string;

}
