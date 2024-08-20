import { Column, PrimaryColumn } from "typeorm";

export class StockSucursal {

    @PrimaryColumn()
    cod_producto: string;

    @Column()
    id_almacen: number;

    @Column()
    cantidad: number;

    @Column()
    fec_mod: string;

}
