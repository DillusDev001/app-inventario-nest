import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Cliente {

    @PrimaryGeneratedColumn()
    id_cliente: number;

    @Column()
    cliente: string;

    @Column()
    ci: string;

    @Column()
    razon: string;

    @Column()
    nit: string;

    @Column()
    celular: string;

    @Column()
    ciudad: string;

    @Column()
    estado: number;

}