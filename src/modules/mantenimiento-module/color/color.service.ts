import { Injectable } from '@nestjs/common';
import { ColorDto } from './dto/color.dto';
import { UpdateColorDto } from './dto/update-color.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Color } from './entities/color.entity';
import { Repository } from 'typeorm';
import { ServiceResult } from 'src/common/interfaces/service.result';

@Injectable()
export class ColorService {
  
  constructor(@InjectRepository(Color) private colorRepository: Repository<Color>) { }

  async create(colorDto: ColorDto): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

    const newObj = this.colorRepository.create(colorDto);
    await this.colorRepository.save(newObj);

    serviceResult.boolean = true;
    serviceResult.message = 'Color se ha agregado correctamente.';
    serviceResult.number = 1;
    serviceResult.object = newObj;

    return serviceResult;
  }

  async findAll(): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

    const result = await this.colorRepository
            .createQueryBuilder()
            .orderBy("color", "ASC")
            .getMany();

    const count = result.length;

    serviceResult.boolean = count > 0 ? true : false;
    serviceResult.message = count + ' Color(es) encontrado(s).';
    serviceResult.number = count;
    serviceResult.data = result;

    return serviceResult;
  }

  async findByID(id_color: number): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

    const result = await this.colorRepository.findOne({ where: { id_color: id_color } });

    serviceResult.boolean = result ? true : false;
    serviceResult.message = result ? 'Se ha encontrado.' : 'No se ha encontrado';
    serviceResult.number = result ? 1 : 0;
    serviceResult.object = result ? result : null;

    return serviceResult;
  }

  async update(id_color: number, updateColorDto: UpdateColorDto): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

    const updateObj = await this.colorRepository.update(id_color, updateColorDto);

    serviceResult.boolean = updateObj.affected === 1 ? true : false;
    serviceResult.message = 'Se ha actualizado correctamente.';
    serviceResult.number = updateObj.affected;

    return serviceResult;
  }

  async remove(id_color: number): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

    const removeObj = await this.colorRepository.delete(id_color);

    serviceResult.boolean = removeObj.affected === 1 ? true : false;
    serviceResult.message = removeObj.affected === 1 ? 'Se ha eliminado correctamente.' : 'No se ha encontrado la color';
    serviceResult.number = removeObj.affected;
    serviceResult.object = removeObj.affected === 1 ? removeObj : null;

    return serviceResult;
  }

}
