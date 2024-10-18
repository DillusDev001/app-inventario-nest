import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class OperacionDetalle {
    
    @PrimaryColumn()
    cod_operacion: string;

    @PrimaryColumn()
    cod_producto: string;

    @Column()
    sec: number;

    @Column()
    cantidad: number;

    @Column('decimal', { precision: 10, scale: 2 })
    precio_unitario: number;

    @Column('decimal', { precision: 10, scale: 2 })
    sub_total: number;
}
