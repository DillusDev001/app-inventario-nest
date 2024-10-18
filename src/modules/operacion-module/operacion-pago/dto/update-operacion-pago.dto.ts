import { PartialType } from '@nestjs/swagger';
import { OperacionPagoDto } from './operacion-pago.dto';

export class UpdateOperacionPagoDto extends PartialType(OperacionPagoDto) {

    cod_operacion: string;
    sec: number;
    metodo_pago: number;
    monto: number;
    url_imagen: string;

}