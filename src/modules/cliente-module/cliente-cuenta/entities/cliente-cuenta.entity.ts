import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ClienteCuenta {

    @PrimaryColumn()
    id_cliente: number;

    @Column()
    monto: number;

    @Column()
    fec_mod: string;

    @Column()
    user_mod: string;

}