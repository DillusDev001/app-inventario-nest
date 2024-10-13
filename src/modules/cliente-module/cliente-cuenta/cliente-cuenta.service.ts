import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ServiceResult } from 'src/common/interfaces/service.result';
import { ClienteCuenta } from './entities/cliente-cuenta.entity';
import { UpdateClienteCuentaDto } from './dto/update-cliente-cuenta.dto';
import { ClienteService } from '../cliente/cliente.service';
import { ClienteCuentaDto } from './dto/cliente-cuenta.dto';

@Injectable()
export class ClienteCuentaService {

    constructor(@InjectRepository(ClienteCuenta) private clienteCuentaRepository: Repository<ClienteCuenta>) { }

    async create(clienteCuentaDto: ClienteCuentaDto): Promise<ServiceResult> {
        let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

        const busqueda = await this.findById(clienteCuentaDto.id_cliente);
        if (busqueda.boolean) {
            serviceResult.message = 'Ya existe una cuenta asociada al cliente.';
        } else {
            const newObj = this.clienteCuentaRepository.create(clienteCuentaDto);
            await this.clienteCuentaRepository.save(newObj);

            serviceResult.boolean = true;
            serviceResult.message = 'Cuenta se ha creado correctamente.';
            serviceResult.number = 1;
            serviceResult.object = newObj;
        }

        return serviceResult;
    }

    async findById(id_cliente: number): Promise<ServiceResult> {
        let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

        const result = await this.clienteCuentaRepository.findBy({ id_cliente });
        const count = result.length;

        serviceResult.boolean = count === 1 ? true : false;
        serviceResult.message = count === 1 ? 'Cuenta de cliente encontrado.' : 'Cuenta no encontrado.';
        serviceResult.number = count;
        serviceResult.data = result;

        return serviceResult;
    }

    async update(id_cliente: number, updateClienteCuentaDto: UpdateClienteCuentaDto): Promise<ServiceResult> {
        let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

        const updateObj = await this.clienteCuentaRepository.update(id_cliente, updateClienteCuentaDto);

        serviceResult.boolean = updateObj.affected === 1 ? true : false;
        serviceResult.message = updateObj.affected === 1 ? 'Se ha actualizado correctamente.' : 'No se ha modificado.';
        serviceResult.number = updateObj.affected;

        return serviceResult;
    }

    async remove(id_cliente: number): Promise<ServiceResult> {
        let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

        const removeObj = await this.clienteCuentaRepository.delete(id_cliente);

        serviceResult.boolean = removeObj.affected === 1 ? true : false;
        serviceResult.message = removeObj.affected === 1 ? 'Se ha eliminado correctamente.' : 'No se ha encontrado al cliente.';
        serviceResult.number = removeObj.affected;
        serviceResult.object = removeObj.affected === 1 ? removeObj : null;

        return serviceResult;
    }

}