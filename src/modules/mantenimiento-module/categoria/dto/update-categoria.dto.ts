import { PartialType } from '@nestjs/swagger';
import { CategoriaDto } from './categoria.dto';

export class UpdateCategoriaDto extends PartialType(CategoriaDto) {

    id_categoria: number;
    categoria: string;
    user_crea: string;
    fec_crea: string;

}
