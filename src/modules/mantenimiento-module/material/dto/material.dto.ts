import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class MaterialDto {

    @ApiProperty()
    id_material: number;

    @ApiProperty()
    @IsNotEmpty()
    material: string;

    @ApiProperty()
    @IsNotEmpty()
    user_crea: string;

    @ApiProperty()
    fec_crea: string;
}
