import { PartialType } from '@nestjs/mapped-types';
import { AlmacenDto } from './almacen.dto';

export class UpdateAlmacenDto extends PartialType(AlmacenDto) {

    id_almacen: number;
    id_sucursal: number;
    nombre: string;
    direccion: string;
    telefono: string;
    descripcion: string;
    usuario_encargado: string;
    estado: number;

}
