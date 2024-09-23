import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class StockGeneral {

    @PrimaryColumn()
    cod_producto: string;

    @Column()
    cantidad: number;

    @Column()
    fec_mod: string;

}
