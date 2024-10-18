import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class OperacionSaldo {

    @PrimaryColumn()
    cod_operacion: string;

    @Column('decimal', { precision: 10, scale: 2 })
    monto: number;

    @Column()
    fec_mod: string;

    @Column()
    user_mod: string;

}