import { Injectable } from '@nestjs/common';
import { VentaDetalleDto } from './dto/venta-detalle.dto';
import { UpdateVentaDetalleDto } from './dto/update-venta-detalle.dto';
import { VentaDetalle } from './entities/venta-detalle.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ServiceResult } from 'src/common/interfaces/service.result';

@Injectable()
export class VentaDetalleService {

  constructor(@InjectRepository(VentaDetalle) private ventaDetalleRepository: Repository<VentaDetalle>) { }

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