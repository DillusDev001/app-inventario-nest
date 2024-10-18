import { Injectable } from '@nestjs/common';
import { AlmacenDto } from './dto/almacen.dto';
import { UpdateAlmacenDto } from './dto/update-almacen.dto';
import { Almacen } from './entities/almacen.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ServiceResult } from 'src/common/interfaces/service.result';
import { UsuarioService } from '../../usuario/usuario.service';

@Injectable()
export class AlmacenService {

  constructor(
    @InjectRepository(Almacen) private almacenRepository: Repository<Almacen>,
    private usuarioService: UsuarioService
  ) { }

  async create(almacenDto: AlmacenDto): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

    const newObj = this.almacenRepository.create(almacenDto);
    await this.almacenRepository.save(newObj);

    serviceResult.boolean = true;
    serviceResult.message = 'Almacen se ha agregado correctamente.';
    serviceResult.number = 1;
    serviceResult.object = newObj;

    return serviceResult;
  }

  async findAll(id_sucursal: number): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

    const result = await this.almacenRepository.find({ where: { id_sucursal: id_sucursal }, order: { nombre: 'ASC' } });
    const count = result.length;

    if (count > 0) {
      for (let i = 0; i < count; i++) {
        //const id
        const resultMuestra = await this.usuarioService.findByUsuario(result[i].usuario_encargado);

        if (resultMuestra.boolean) {
          result[i]['encargado'] = resultMuestra.data[0];
        } else {
          result[i]['encargado'] = null;
        }
      }
    }

    serviceResult.boolean = count > 0 ? true : false;
    serviceResult.message = count + ' almacen(es) encontrado(s).';
    serviceResult.number = count;
    serviceResult.data = result;

    return serviceResult;
  }

  async findByID(id_almacen: number): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

    const result = await this.almacenRepository.find({ where: { id_almacen: id_almacen } });
    const count = result.length;

    if (count > 0) {
      for (let i = 0; i < count; i++) {
        //const id
        const resultMuestra = await this.usuarioService.findByUsuario(result[i].usuario_encargado);

        if (resultMuestra.boolean) {
          result[i]['encargado'] = resultMuestra.data[0];
        }
      }
    }

    serviceResult.boolean = count === 1 ? true : false;
    serviceResult.message = count === 1 ? 'Se ha encontrado.' : 'No se ha encontrado almacen.';
    serviceResult.number = count;
    serviceResult.data = result;

    return serviceResult;
  }

  async update(id_sucursal: number, updateAlmacenDto: UpdateAlmacenDto): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

    const updateObj = await this.almacenRepository.update(id_sucursal, updateAlmacenDto);

    serviceResult.boolean = updateObj.affected === 1 ? true : false;
    serviceResult.message = 'Se ha actualizado correctamente.';
    serviceResult.number = updateObj.affected;

    return serviceResult;
  }

  async remove(id_sucursal: number): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

    const removeObj = await this.almacenRepository.delete(id_sucursal);

    serviceResult.boolean = removeObj.affected === 1 ? true : false;
    serviceResult.message = removeObj.affected === 1 ? 'Se ha eliminado correctamente.' : 'No se ha encontrado la almacen.';
    serviceResult.number = removeObj.affected;
    serviceResult.object = removeObj.affected === 1 ? removeObj : null;

    return serviceResult;
  }

}