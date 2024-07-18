import { Injectable } from '@nestjs/common';
import { VentaPagoDto } from './dto/venta-pago.dto';
import { UpdateVentaPagoDto } from './dto/update-venta-pago.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ServiceResult } from 'src/common/interfaces/service.result';
import { VentaPago } from './entities/venta-pago.entity';

@Injectable()
export class VentaPagoService {
  
  constructor(@InjectRepository(VentaPago) private ventaPagoRepository: Repository<VentaPago>) { }

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