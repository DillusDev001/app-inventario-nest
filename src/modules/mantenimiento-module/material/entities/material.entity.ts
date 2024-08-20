import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Material {

    @PrimaryGeneratedColumn()
    id_material: number;

    @Column()
    material: string;

    @Column()
    user_crea: string;
    
    @Column()
    fec_crea: string;

}
