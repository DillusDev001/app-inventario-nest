import { PartialType } from '@nestjs/swagger';
import { OperacionDto } from './operacion.dto';

export class UpdateOperacionDto extends PartialType(OperacionDto) {

    cod_operacion: string;
    id_cliente: number;
    user_vendedor: string;
    fec_operacion: string;
    nro_factura: string;
    observacion: string;
    ciudad_envio: string;
    precio_total: number;
    descuento: number;
    precio_pagar: number;
    estado: string;

}
