import { Injectable } from '@nestjs/common';
import { OperacionSaldoDto } from './dto/operacion-saldo.dto';
import { UpdateOperacionSaldoDto } from './dto/update-operacion-saldo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { OperacionSaldo } from './entities/operacion-saldo.entity';
import { Repository } from 'typeorm';
import { ServiceResult } from 'src/common/interfaces/service.result';

@Injectable()
export class OperacionSaldoService {
  
    constructor(@InjectRepository(OperacionSaldo) private operacionSaldoRepository: Repository<OperacionSaldo>) { }

    async create(operacionSaldoDto: OperacionSaldoDto): Promise<ServiceResult> {
      let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;
  
      const newObj = this.operacionSaldoRepository.create(operacionSaldoDto);
      await this.operacionSaldoRepository.save(newObj);
  
      serviceResult.boolean = true;
      serviceResult.message = 'Se ha agregado correctamente.';
      serviceResult.number = 1;
      serviceResult.object = newObj;
  
      return serviceResult;
    }
  
    async findAll(): Promise<ServiceResult> {
      let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;
  
      const result = await this.operacionSaldoRepository.find({ order: { fec_mod: 'ASC' } });
      const count = result.length;
  
      serviceResult.boolean = count > 0 ? true : false;
      serviceResult.message = count + ' operacion(s) encontrado(s).';
      serviceResult.number = count;
      serviceResult.data = result;
  
      return serviceResult;
    }
  
    async findById(cod_operacion: string): Promise<ServiceResult> {
      let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;
  
      const result = await this.operacionSaldoRepository.findBy({ cod_operacion });
      const count = result.length;
  
      serviceResult.boolean = count === 1 ? true : false;
      serviceResult.message = count === 1 ? 'Operación encontrada.': 'Operación no encontrada.';
      serviceResult.number = count;
      serviceResult.data = result;
  
      return serviceResult;
    }
  
    async update(cod_operacion: string, updateOperacionSaldoDto: UpdateOperacionSaldoDto): Promise<ServiceResult> {
      let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;
  
      const updateObj = await this.operacionSaldoRepository.update(cod_operacion, updateOperacionSaldoDto);
  
      serviceResult.boolean = updateObj.affected === 1 ? true : false;
      serviceResult.message = updateObj.affected === 1 ? 'Se ha actualizado correctamente.' : 'No se ha modificado.';
      serviceResult.number = updateObj.affected;
  
      return serviceResult;
    }
  
    async remove(cod_operacion: string): Promise<ServiceResult> {
      let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;
  
      const removeObj = await this.operacionSaldoRepository.delete(cod_operacion);
  
      serviceResult.boolean = removeObj.affected === 1 ? true : false;
      serviceResult.message = removeObj.affected === 1 ? 'Se ha eliminado correctamente.' : 'No se ha encontrado saldo de operacion.';
      serviceResult.number = removeObj.affected;
      serviceResult.object = removeObj.affected === 1 ? removeObj : null;
  
      return serviceResult;
    }
  
}
