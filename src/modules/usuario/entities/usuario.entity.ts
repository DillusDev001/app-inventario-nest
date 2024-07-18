import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Usuario {

    @PrimaryColumn()
    usuario: string;

    @Column()
    nombres: string;

    @Column()
    apellidos: string;

    @Column()
    password: string;

    @Column()
    pregunta: string;

    @Column()
    respuesta: string;

    @Column()
    celular: string;

    @Column()
    sexo: string;

    @Column()
    rol: string;

    @Column()
    autorizacion: number;

    @Column()
    estado: number;

}
