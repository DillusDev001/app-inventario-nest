import { Injectable } from '@nestjs/common';
import { SucursalDto } from './dto/sucursal.dto';
import { UpdateSucursalDto } from './dto/update-sucursal.dto';
import { Sucursal } from './entities/sucursal.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ServiceResult } from 'src/common/interfaces/service.result';
import { UsuarioService } from '../usuario/usuario.service';

@Injectable()
export class SucursalService {

  constructor(
    @InjectRepository(Sucursal) private sucursalRepository: Repository<Sucursal>,
    private usuarioService: UsuarioService
  ) { }

  async create(sucursalDto: SucursalDto): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

    const newObj = this.sucursalRepository.create(sucursalDto);
    await this.sucursalRepository.save(newObj);

    serviceResult.boolean = true;
    serviceResult.message = 'Sucursal se ha agregado correctamente.';
    serviceResult.number = 1;
    serviceResult.object = newObj;

    return serviceResult;
  }

  async findAll(): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

    const result = await this.sucursalRepository.find({ order: { nombre: 'ASC' } });
    const count = result.length;

    if (count > 0) {
      for (let i = 0; i < count; i++) {
        //const id
        const resultUsuario = await this.usuarioService.findByUsuario(result[i].usuario_encargado);

        if (resultUsuario.boolean) {
          result[i]['encargado'] = resultUsuario.data[0];
        } else {
          result[i]['encargado'] = null;
        }
      }
    }

    serviceResult.boolean = count > 0 ? true : false;
    serviceResult.message = count + ' sucursal(es) encontrado(s).';
    serviceResult.number = count;
    serviceResult.data = result;

    return serviceResult;
  }

  async findByID(id_sucursal: number): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

    const result = await this.sucursalRepository.find({ where: { id_sucursal: id_sucursal } });
    const count = result.length;

    if (count > 0) {
      for (let i = 0; i < count; i++) {
        //const id
        const resultUsuario = await this.usuarioService.findByUsuario(result[i].usuario_encargado);

        if (resultUsuario.boolean) {
          result[i]['encargado'] = resultUsuario.data[0];
        } else {
          result[i]['encargado'] = null;
        }
      }
    }

    serviceResult.boolean = count === 1 ? true : false;
    serviceResult.message = count === 1 ? 'Se ha encontrado.' : 'No se ha encontrado sucursal.';
    serviceResult.number = count;
    serviceResult.data = result;

    return serviceResult;
  }

  async update(id_sucursal: number, updateSucursalDto: UpdateSucursalDto): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

    const updateObj = await this.sucursalRepository.update(id_sucursal, updateSucursalDto);

    serviceResult.boolean = updateObj.affected === 1 ? true : false;
    serviceResult.message = 'Se ha actualizado correctamente.';
    serviceResult.number = updateObj.affected;

    return serviceResult;
  }

  async remove(id_sucursal: number): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

    const removeObj = await this.sucursalRepository.delete(id_sucursal);

    serviceResult.boolean = removeObj.affected === 1 ? true : false;
    serviceResult.message = removeObj.affected === 1 ? 'Se ha eliminado correctamente.' : 'No se ha encontrado la sucursal';
    serviceResult.number = removeObj.affected;
    serviceResult.object = removeObj.affected === 1 ? removeObj : null;

    return serviceResult;
  }

}