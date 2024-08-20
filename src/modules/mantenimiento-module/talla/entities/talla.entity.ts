import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Talla {
    @PrimaryGeneratedColumn()
    id_talla: number;

    @Column()
    talla: string;

    @Column()
    user_crea: string;
    
    @Column()
    fec_crea: string;
}
