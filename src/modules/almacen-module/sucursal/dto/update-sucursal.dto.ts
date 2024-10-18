import { PartialType } from '@nestjs/mapped-types';
import { SucursalDto } from './sucursal.dto';

export class UpdateSucursalDto extends PartialType(SucursalDto) {

    id_sucursal: number;
    nombre: string;
    direccion: string;
    telefono: string;
    usuario_encargado: string;
    descripcion: string;
    estado: number;

}
