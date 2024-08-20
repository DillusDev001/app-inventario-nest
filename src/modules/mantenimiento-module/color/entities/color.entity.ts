import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Color {

    @PrimaryGeneratedColumn()
    id_color: number;

    @Column()
    color: string;

    @Column()
    user_crea: string;
    
    @Column()
    fec_crea: string;

}
