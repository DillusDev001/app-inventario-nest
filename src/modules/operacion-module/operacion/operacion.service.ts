import { Injectable } from '@nestjs/common';
import { OperacionDto } from './dto/operacion.dto';
import { UpdateOperacionDto } from './dto/update-operacion.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Operacion } from './entities/operacion.entity';
import { Repository } from 'typeorm';
import { ServiceResult } from 'src/common/interfaces/service.result';

@Injectable()
export class OperacionService {

  constructor(@InjectRepository(Operacion) private operacionRepository: Repository<Operacion>) { }

  async create(operacionDto: OperacionDto): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

    const newObj = this.operacionRepository.create(operacionDto);
    await this.operacionRepository.save(newObj);

    serviceResult.boolean = true;
    serviceResult.message = operacionDto.estado + ' se ha agregado correctamente.';
    serviceResult.number = 1;
    serviceResult.object = newObj;

    return serviceResult;
  }

  async findAll(): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

    const result = await this.operacionRepository.find({ order: { fec_operacion: 'ASC' } });
    const count = result.length;

    serviceResult.boolean = count > 0 ? true : false;
    serviceResult.message = count + ' operacion(s) encontrado(s).';
    serviceResult.number = count;
    serviceResult.data = result;

    return serviceResult;
  }

  async findById(cod_operacion: string): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

    const result = await this.operacionRepository.findBy({ cod_operacion });
    const count = result.length;

    serviceResult.boolean = count === 1 ? true : false;
    serviceResult.message = count === 1 ? 'Operación encontrada.': 'Operación no encontrada.';
    serviceResult.number = count;
    serviceResult.data = result;

    return serviceResult;
  }

  async findAtribute(attribute: string, value: string): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

    const result = await this.operacionRepository
      .createQueryBuilder()
      .orderBy(attribute, "ASC")
      .where(attribute + " like :value", { value: '%' + value + '%' })
      .getMany()

    const count = result.length;

    serviceResult.boolean = count > 0 ? true : false;
    serviceResult.message = count + ' operacion(s) encontrado(s).';
    serviceResult.number = count;
    serviceResult.data = result;

    return serviceResult;
  }

  async update(cod_operacion: string, updateOperacionDto: UpdateOperacionDto): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

    const updateObj = await this.operacionRepository.update(cod_operacion, updateOperacionDto);

    serviceResult.boolean = updateObj.affected === 1 ? true : false;
    serviceResult.message = updateObj.affected === 1 ? 'Se ha actualizado correctamente.' : 'No se ha modificado.';
    serviceResult.number = updateObj.affected;

    return serviceResult;
  }

  async remove(cod_operacion: string): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

    const removeObj = await this.operacionRepository.delete(cod_operacion);

    serviceResult.boolean = removeObj.affected === 1 ? true : false;
    serviceResult.message = removeObj.affected === 1 ? 'Se ha eliminado correctamente.' : 'No se ha encontrado al operacion.';
    serviceResult.number = removeObj.affected;
    serviceResult.object = removeObj.affected === 1 ? removeObj : null;

    return serviceResult;
  }

}
