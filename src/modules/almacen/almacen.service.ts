import { Injectable } from '@nestjs/common';
import { AlmacenDto } from './dto/almacen.dto';
import { UpdateAlmacenDto } from './dto/update-almacen.dto';
import { Almacen } from './entities/almacen.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ServiceResult } from 'src/common/interfaces/service.result';

@Injectable()
export class AlmacenService {
  
  constructor(@InjectRepository(Almacen) private almacenRepository: Repository<Almacen>) { }

  async create(): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;
    
    //usuarioDto: UsuarioDto

    return serviceResult;
  }

  async findAll(): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

    return serviceResult;
  }

  async findBy(): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

    return serviceResult;
  }

  async update(): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

    return serviceResult;
  }

  async remove(): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

    return serviceResult;
  }
  
}