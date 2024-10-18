import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ClienteCuentaHistorial {

    @PrimaryGeneratedColumn()
    id_historial: number;

    @Column()
    id_cliente: number;

    @Column()
    tipo: string;

    @Column()
    metodo_cuenta: string;

    @Column('decimal', { precision: 10, scale: 2 })
    monto: number;

    @Column()
    fec_mod: string;

    @Column()
    user_mod: string;

}