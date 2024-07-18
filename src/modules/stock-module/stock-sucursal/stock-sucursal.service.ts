import { Injectable } from '@nestjs/common';
import { StockSucursalDto } from './dto/stock-sucursal.dto';
import { UpdateStockSucursalDto } from './dto/update-stock-sucursal.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { StockSucursal } from './entities/stock-sucursal.entity';
import { Repository } from 'typeorm';
import { ServiceResult } from 'src/common/interfaces/service.result';

@Injectable()
export class StockSucursalService {
  
  constructor(@InjectRepository(StockSucursal) private stockSucursalRepository: Repository<StockSucursal>) { }

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