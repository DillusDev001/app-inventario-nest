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

    @Column()
    monto: number;

    @Column()
    fec_mod: string;

    @Column()
    user_mod: string;

}