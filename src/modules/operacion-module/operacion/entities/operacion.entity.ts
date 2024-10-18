import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Operacion {

    @PrimaryColumn()
    cod_operacion: string;

    @Column()
    id_cliente: number;

    @Column()
    user_vendedor: string;

    @Column()
    fec_operacion: string;

    @Column()
    nro_factura: string;

    @Column()
    observacion: string;

    @Column()
    ciudad_envio: string;

    @Column('decimal', { precision: 10, scale: 2 })
    precio_total: number;

    @Column('decimal', { precision: 10, scale: 2 })
    descuento: number;

    @Column('decimal', { precision: 10, scale: 2 })
    precio_pagar: number;

    @Column()
    estado: string;

}
