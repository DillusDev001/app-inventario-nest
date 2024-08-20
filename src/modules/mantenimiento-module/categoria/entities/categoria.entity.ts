import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Categoria {

    @PrimaryGeneratedColumn()
    id_categoria: number;

    @Column()
    categoria: string;

    @Column()
    user_crea: string;
    
    @Column()
    fec_crea: string;

}
