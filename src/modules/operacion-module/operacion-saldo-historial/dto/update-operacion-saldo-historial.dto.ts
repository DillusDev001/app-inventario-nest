import { PartialType } from '@nestjs/swagger';
import { OperacionSaldoHistorialDto } from './operacion-saldo-historial.dto';

export class UpdateOperacionSaldoHistorialDto extends PartialType(OperacionSaldoHistorialDto) {

    id_historial: number;
    cod_operacion: string;
    persona: string;
    monto: number;
    fec_pago: string;
    user_mod: string;

}