import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Producto {
    
    @PrimaryColumn()
    id_producto: number

    @Column()
    cod_producto: string;

    @Column()
    cod_hash: string;

    @Column()
    codigo: string;

    @Column()
    tipo: string;

    @Column()
    categoria: string;

    @Column()
    talla: string;

    @Column()
    color: string;

    @Column()
    material: string;

    @Column()
    sexo: string;

    @Column()
    descripcion: string;

    @Column()
    precio_unitario: number;

    @Column()
    precio_mayor: number;

    @Column()
    estado: number;

}
