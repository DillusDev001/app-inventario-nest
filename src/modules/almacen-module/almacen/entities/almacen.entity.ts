import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Almacen {

    @PrimaryGeneratedColumn()
    id_almacen: number;

    @Column()
    id_sucursal: number;

    @Column()
    nombre: string;

    @Column()
    direccion: string;

    @Column()
    telefono: string;

    @Column()
    descripcion: string;

    @Column()
    usuario_encargado: string;

    @Column()
    estado: number;

}
