import { Injectable } from '@nestjs/common';
import { OperacionSaldoHistorialDto } from './dto/operacion-saldo-historial.dto';
import { UpdateOperacionSaldoHistorialDto } from './dto/update-operacion-saldo-historial.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { OperacionSaldoHistorial } from './entities/operacion-saldo-historial.entity';
import { Repository } from 'typeorm';
import { ServiceResult } from 'src/common/interfaces/service.result';

@Injectable()
export class OperacionSaldoHistorialService {

    constructor(@InjectRepository(OperacionSaldoHistorial) private operacionSaldoHistorialRepository: Repository<OperacionSaldoHistorial>) { }

    async create(operacionSaldoHistorialDto: OperacionSaldoHistorialDto): Promise<ServiceResult> {
        let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

        const newObj = this.operacionSaldoHistorialRepository.create(operacionSaldoHistorialDto);
        await this.operacionSaldoHistorialRepository.save(newObj);

        serviceResult.boolean = true;
        serviceResult.message = 'Historial agregado correctamente.';
        serviceResult.number = 1;
        serviceResult.object = newObj;

        return serviceResult;
    }

    async findById(cod_operacion: string): Promise<ServiceResult> {
        let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

        const result = await this.operacionSaldoHistorialRepository.find({ where: { cod_operacion }, order: { id_historial: 'ASC' }, take: 10 });
        const count = result.length;

        serviceResult.boolean = count > 0 ? true : false;
        serviceResult.message = count > 0 ? 'Historial encontrado.' : 'No hay historial.';
        serviceResult.number = count;
        serviceResult.data = result;

        return serviceResult;
    }

    async update(id_historial: number, updateOperacionSaldoHistorialDto: UpdateOperacionSaldoHistorialDto): Promise<ServiceResult> {
        let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

        const updateObj = await this.operacionSaldoHistorialRepository.update(id_historial, updateOperacionSaldoHistorialDto);

        serviceResult.boolean = updateObj.affected === 1 ? true : false;
        serviceResult.message = updateObj.affected === 1 ? 'Item actualizado correctamente.' : 'Item no encontrado.';
        serviceResult.number = updateObj.affected;

        return serviceResult;
    }

    async remove(id_historial: number): Promise<ServiceResult> {
        let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

        const removeObj = await this.operacionSaldoHistorialRepository.delete(id_historial);

        serviceResult.boolean = removeObj.affected === 1 ? true : false;
        serviceResult.message = removeObj.affected === 1 ? 'Item eliminado correctamente.' : 'Item no encontrado.';
        serviceResult.number = removeObj.affected;
        serviceResult.object = removeObj.affected === 1 ? removeObj : null;

        return serviceResult;
    }

}
