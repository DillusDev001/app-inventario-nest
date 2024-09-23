import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class StockSucursal {

    @PrimaryColumn()
    cod_producto: string;

    @PrimaryColumn()
    id_sucursal: number;

    @PrimaryColumn()
    id_almacen: number;

    @Column()
    cantidad: number;

    @Column()
    fec_mod: string;


}
