import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ServiceResult } from 'src/common/interfaces/service.result';
import { ClienteCuentaHistorial } from './entities/cliente-cuenta-historial.entity';
import { Repository } from 'typeorm';
import { ClienteCuentaHistorialDto } from './dto/cliente-cuenta-historial.dto';
import { UpdateClienteCuentaHistorialDto } from './dto/update-cliente-cuenta-historial.dto';

@Injectable()
export class ClienteCuentaHistorialService {

    constructor(@InjectRepository(ClienteCuentaHistorial) private clienteCuentaHistorialRepository: Repository<ClienteCuentaHistorial>) { }

    async create(clienteCuentaHistorialDto: ClienteCuentaHistorialDto): Promise<ServiceResult> {
        let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

        const newObj = this.clienteCuentaHistorialRepository.create(clienteCuentaHistorialDto);
        await this.clienteCuentaHistorialRepository.save(newObj);

        serviceResult.boolean = true;
        serviceResult.message = 'Item agregado a historial correctamente.';
        serviceResult.number = 1;
        serviceResult.object = newObj;

        return serviceResult;
    }

    async findById(id_cliente: number): Promise<ServiceResult> {
        let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

        const result = await this.clienteCuentaHistorialRepository.find({ where: { id_cliente }, order: { id_historial: 'DESC' } });
        const count = result.length;

        serviceResult.boolean = count > 0 ? true : false;
        serviceResult.message = count > 0 ? 'Historial encontrado.' : 'No hay historial.';
        serviceResult.number = count;
        serviceResult.data = result;

        return serviceResult;
    }

    async update(id_historial: number, updateClienteCuentaHistorialDto: UpdateClienteCuentaHistorialDto): Promise<ServiceResult> {
        let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

        const updateObj = await this.clienteCuentaHistorialRepository.update(id_historial, updateClienteCuentaHistorialDto);

        serviceResult.boolean = updateObj.affected === 1 ? true : false;
        serviceResult.message = updateObj.affected === 1 ? 'Item actualizado correctamente.' : 'Item no encontrado.';
        serviceResult.number = updateObj.affected;

        return serviceResult;
    }

    async remove(id_historial: number): Promise<ServiceResult> {
        let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

        const removeObj = await this.clienteCuentaHistorialRepository.delete(id_historial);

        serviceResult.boolean = removeObj.affected === 1 ? true : false;
        serviceResult.message = removeObj.affected === 1 ? 'Item eliminado correctamente.' : 'Item no encontrado.';
        serviceResult.number = removeObj.affected;
        serviceResult.object = removeObj.affected === 1 ? removeObj : null;

        return serviceResult;
    }

}