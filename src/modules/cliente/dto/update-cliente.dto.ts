import { PartialType } from '@nestjs/swagger';
import { ClienteDto } from './cliente.dto';

export class UpdateClienteDto extends PartialType(ClienteDto) {

    id_cliente: number;
    cliente: string;
    razon: string;
    nit: string;
    celular: string;

}
