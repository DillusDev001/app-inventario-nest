import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Sucursal {

    @PrimaryGeneratedColumn()
    id_sucursal: number;

    @Column()
    nombre: string;

    @Column()
    direccion: string;

    @Column()
    telefono: string;

    @Column()
    usuario_encargado: string;

    @Column()
    descripcion: string;

    @Column()
    estado: number;

}
