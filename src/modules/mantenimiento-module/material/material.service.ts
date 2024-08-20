import { Injectable } from '@nestjs/common';
import { MaterialDto } from './dto/material.dto';
import { UpdateMaterialDto } from './dto/update-material.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Material } from './entities/material.entity';
import { Repository } from 'typeorm';
import { ServiceResult } from 'src/common/interfaces/service.result';

@Injectable()
export class MaterialService {

  constructor(@InjectRepository(Material) private materialRepository: Repository<Material>) { }

  async create(materialDto: MaterialDto): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

    const newObj = this.materialRepository.create(materialDto);
    await this.materialRepository.save(newObj);

    serviceResult.boolean = true;
    serviceResult.message = 'Material se ha agregado correctamente.';
    serviceResult.number = 1;
    serviceResult.object = newObj;

    return serviceResult;
  }

  async findAll(): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

    const result = await this.materialRepository
            .createQueryBuilder()
            .orderBy("material", "ASC")
            .getMany();

    const count = result.length;

    serviceResult.boolean = count > 0 ? true : false;
    serviceResult.message = count + ' Material(es) encontrado(s).';
    serviceResult.number = count;
    serviceResult.data = result;

    return serviceResult;
  }

  async findByID(id_material: number): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

    const result = await this.materialRepository.findOne({ where: { id_material: id_material } });

    serviceResult.boolean = result ? true : false;
    serviceResult.message = result ? 'Se ha encontrado.' : 'No se ha encontrado';
    serviceResult.number = result ? 1 : 0;
    serviceResult.object = result ? result : null;

    return serviceResult;
  }

  async update(id_material: number, updateMaterialDto: UpdateMaterialDto): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

    const updateObj = await this.materialRepository.update(id_material, updateMaterialDto);

    serviceResult.boolean = updateObj.affected === 1 ? true : false;
    serviceResult.message = 'Se ha actualizado correctamente.';
    serviceResult.number = updateObj.affected;

    return serviceResult;
  }

  async remove(id_material: number): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

    const removeObj = await this.materialRepository.delete(id_material);

    serviceResult.boolean = removeObj.affected === 1 ? true : false;
    serviceResult.message = removeObj.affected === 1 ? 'Se ha eliminado correctamente.' : 'No se ha encontrado el material';
    serviceResult.number = removeObj.affected;
    serviceResult.object = removeObj.affected === 1 ? removeObj : null;

    return serviceResult;
  }

}
