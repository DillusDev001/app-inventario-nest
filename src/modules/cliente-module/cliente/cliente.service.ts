import { Injectable } from '@nestjs/common';
import { ClienteDto } from './dto/cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { Cliente } from './entities/cliente.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ServiceResult } from 'src/common/interfaces/service.result';

@Injectable()
export class ClienteService {

  constructor(@InjectRepository(Cliente) private clienteRepository: Repository<Cliente>) { }

  async create(clienteDto: ClienteDto): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

    const busqueda = await this.findAtribute('ci', clienteDto.ci);
    if (busqueda.boolean) {
      serviceResult.message = 'Ya existe un cliente con este CI.';
    } else {
      const newObj = this.clienteRepository.create(clienteDto);
      await this.clienteRepository.save(newObj);

      serviceResult.boolean = true;
      serviceResult.message = 'Cliente se ha agregado correctamente.';
      serviceResult.number = 1;
      serviceResult.object = newObj;
    }

    return serviceResult;
  }

  async findAll(): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

    const result = await this.clienteRepository.find({ order: { cliente: 'ASC' } });
    const count = result.length;

    serviceResult.boolean = count > 0 ? true : false;
    serviceResult.message = count + ' cliente(s) encontrado(s).';
    serviceResult.number = count;
    serviceResult.data = result;

    return serviceResult;
  }

  async findById(id_cliente: number): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

    const result = await this.clienteRepository.findBy({ id_cliente });
    const count = result.length;

    serviceResult.boolean = count === 1 ? true : false;
    serviceResult.message = count + ' cliente encontrado.';
    serviceResult.number = count;
    serviceResult.data = result;

    return serviceResult;
  }

  async findAtribute(attribute: string, value: string): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

    const result = await this.clienteRepository
      .createQueryBuilder()
      .orderBy("cliente", "ASC")
      .where(attribute + " like :value", { value: '%' + value + '%' })
      .getMany()

    const count = result.length;

    serviceResult.boolean = count > 0 ? true : false;
    serviceResult.message = count + ' cliente(s) encontrado(s).';
    serviceResult.number = count;
    serviceResult.data = result;

    return serviceResult;
  }

  async update(id_cliente: number, updateClienteDto: UpdateClienteDto): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

    const updateObj = await this.clienteRepository.update(id_cliente, updateClienteDto);

    serviceResult.boolean = updateObj.affected === 1 ? true : false;
    serviceResult.message = updateObj.affected === 1 ? 'Se ha actualizado correctamente.' : 'No se ha modificado.';
    serviceResult.number = updateObj.affected;

    return serviceResult;
  }

  async remove(id_cliente: number): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

    const removeObj = await this.clienteRepository.delete(id_cliente);

    serviceResult.boolean = removeObj.affected === 1 ? true : false;
    serviceResult.message = removeObj.affected === 1 ? 'Se ha eliminado correctamente.' : 'No se ha encontrado al cliente.';
    serviceResult.number = removeObj.affected;
    serviceResult.object = removeObj.affected === 1 ? removeObj : null;

    return serviceResult;
  }

}
