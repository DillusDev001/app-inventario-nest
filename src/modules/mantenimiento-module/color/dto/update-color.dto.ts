import { PartialType } from '@nestjs/swagger';
import { ColorDto } from './color.dto';

export class UpdateColorDto extends PartialType(ColorDto) {
    
    id_color: number;
    color: string;
    hexadecimal: string;
    user_crea: string;
    fec_crea: string;
    
}
