import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class OperacionPago {

    @PrimaryColumn()
    cod_operacion: string;

    @PrimaryColumn()
    sec: number;

    @Column()
    metodo_pago: number;

    @Column('decimal', { precision: 10, scale: 2 })
    monto: number;

    @Column()
    url_imagen: string;

}