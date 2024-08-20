import { Injectable } from '@nestjs/common';
import { TallaDto } from './dto/talla.dto';
import { UpdateTallaDto } from './dto/update-talla.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Talla } from './entities/talla.entity';
import { Repository } from 'typeorm';
import { ServiceResult } from 'src/common/interfaces/service.result';

@Injectable()
export class TallaService {

  constructor(@InjectRepository(Talla) private tallaRepository: Repository<Talla>) { }

  async create(tallaDto: TallaDto): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

    const newObj = this.tallaRepository.create(tallaDto);
    await this.tallaRepository.save(newObj);

    serviceResult.boolean = true;
    serviceResult.message = 'Talla se ha agregado correctamente.';
    serviceResult.number = 1;
    serviceResult.object = newObj;

    return serviceResult;
  }

  async findAll(): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

    const result = await this.tallaRepository.find();
    const count = result.length;

    serviceResult.boolean = count > 0 ? true : false;
    serviceResult.message = count + ' Talla(s) encontrado(s).';
    serviceResult.number = count;
    serviceResult.data = result;

    return serviceResult;
  }

  async findByID(id_talla: number): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

    const result = await this.tallaRepository.findOne({ where: { id_talla: id_talla } });

    serviceResult.boolean = result ? true : false;
    serviceResult.message = result ? 'Se ha encontrado.' : 'No se ha encontrado';
    serviceResult.number = result ? 1 : 0;
    serviceResult.object = result ? result : null;

    return serviceResult;
  }

  async update(id_talla: number, updateTallaDto: UpdateTallaDto): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

    const updateObj = await this.tallaRepository.update(id_talla, updateTallaDto);

    serviceResult.boolean = updateObj.affected === 1 ? true : false;
    serviceResult.message = 'Se ha actualizado correctamente.';
    serviceResult.number = updateObj.affected;

    return serviceResult;
  }

  async remove(id_talla: number): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

    const removeObj = await this.tallaRepository.delete(id_talla);

    serviceResult.boolean = removeObj.affected === 1 ? true : false;
    serviceResult.message = removeObj.affected === 1 ? 'Se ha eliminado correctamente.' : 'No se ha encontrado la talla';
    serviceResult.number = removeObj.affected;
    serviceResult.object = removeObj.affected === 1 ? removeObj : null;

    return serviceResult;
  }

}
