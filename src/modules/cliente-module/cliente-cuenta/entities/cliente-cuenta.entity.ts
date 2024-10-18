import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ClienteCuenta {

    @PrimaryColumn()
    id_cliente: number;

    @Column('decimal', { precision: 10, scale: 2 })
    monto: number;

    @Column()
    fec_mod: string;

    @Column()
    user_mod: string;

}