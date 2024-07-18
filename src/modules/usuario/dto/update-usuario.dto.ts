import { PartialType } from '@nestjs/mapped-types';
import { UsuarioDto } from './usuario.dto';

export class UpdateUsuarioDto extends PartialType(UsuarioDto) {

    usuario: string;
    nombres: string;
    apellidos: string;
    password: string;
    pregunta: string;
    respuesta: string;
    celular: string;
    sexo: string;
    rol: string;
    autorizacion: number;
    estado: number;

}
