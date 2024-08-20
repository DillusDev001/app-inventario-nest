import { PartialType } from '@nestjs/swagger';
import { TallaDto } from './talla.dto';

export class UpdateTallaDto extends PartialType(TallaDto) {

    id_talla: number;
    talla: string;
    user_crea: string;
    fec_crea: string;

}
