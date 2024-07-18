import { Injectable } from '@nestjs/common';
import { CompraDetalleDto } from './dto/compra-detalle.dto';
import { UpdateCompraDetalleDto } from './dto/update-compra-detalle.dto';
import { CompraDetalle } from './entities/compra-detalle.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ServiceResult } from 'src/common/interfaces/service.result';

@Injectable()
export class CompraDetalleService {
  
  constructor(@InjectRepository(CompraDetalle) private compraDetalleRepository: Repository<CompraDetalle>) { }

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