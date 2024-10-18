import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class OperacionSaldoHistorial {

    @PrimaryGeneratedColumn()
    id_historial: number;

    @Column()
    cod_operacion: string;

    @Column()
    persona: string;

    @Column('decimal', { precision: 10, scale: 2 })
    monto: number;

    @Column()
    fec_pago: string;

    @Column()
    user_mod: string;

}