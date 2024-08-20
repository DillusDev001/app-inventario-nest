import { PartialType } from '@nestjs/swagger';
import { MaterialDto } from './material.dto';

export class UpdateMaterialDto extends PartialType(MaterialDto) {
    
    id_material: number;
    material: string;
    user_crea: string;
    fec_crea: string;
    
}
