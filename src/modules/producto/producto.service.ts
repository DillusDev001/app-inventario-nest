import { Injectable } from '@nestjs/common';
import { ProductoDto } from './dto/producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { Producto } from './entities/producto.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ServiceResult } from 'src/common/interfaces/service.result';
import { AuthService } from 'src/common/services/auth.service';

@Injectable()
export class ProductoService {

  constructor(
    @InjectRepository(Producto) private productoRepository: Repository<Producto>,
    private readonly authService: AuthService
  ) { }

  async create(productoDto: ProductoDto): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

    const result = await this.findByID(productoDto.cod_producto);

    if (!result.boolean) {
      productoDto.cod_hash = await this.authService.hashPassword(productoDto.cod_producto);

      const newObj = this.productoRepository.create(productoDto);
      await this.productoRepository.save(newObj);

      serviceResult.boolean = true;
      serviceResult.message = 'Producto se ha agregado correctamente.';
      serviceResult.number = 1;
      serviceResult.object = newObj;

    } else {
      serviceResult.boolean = false;
      serviceResult.message = 'Las características del producto ya se encuentran registrados.';
    }

    return serviceResult;
  }

  async findAll(): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

    const result = await this.productoRepository.find({ order: { cod_producto: 'ASC' } });

    const count = result.length;

    serviceResult.boolean = count > 0 ? true : false;
    serviceResult.message = count + ' Producto(s) encontrado(s).';
    serviceResult.number = count;
    serviceResult.data = result;

    return serviceResult;
  }

  async findByID(cod_producto: string): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

    const result = await this.productoRepository.findOne({ where: { cod_producto: cod_producto } });

    serviceResult.boolean = result ? true : false;
    serviceResult.message = result ? 'Se ha encontrado.' : 'No se ha encontrado';
    serviceResult.number = result ? 1 : 0;
    serviceResult.object = result ? result : null;

    return serviceResult;
  }

  async findAtribute(attribute: string, value: string): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

    const result = await this.productoRepository
      .createQueryBuilder()
      .orderBy(attribute, 'DESC')
      .where(attribute + " like :value ", { value: '%' + value + '%' })
      //.andWhere("estado = 1")
      .getMany()

    const count = result.length;

    serviceResult.boolean = count > 0 ? true : false;
    serviceResult.message = count + ' usuario(s) encontrado(s).';
    serviceResult.number = count;
    serviceResult.data = result;

    return serviceResult;
  }

  async findNotStockGeneral(): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

    const result = await this.productoRepository
      .createQueryBuilder()
      .where('cod_producto NOT IN (SELECT cod_producto FROM stock_general)')
      .getMany();

    const count = result.length;

    serviceResult.boolean = count > 0 ? true : false;
    serviceResult.message = count + ' producto(s) que no están es stock general.';
    serviceResult.number = count;
    serviceResult.data = result;

    return serviceResult;
  }

  async findNotStockSucursal(id_sucursal:number, id_almacen: number): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

    const result = await this.productoRepository
      .createQueryBuilder()
      .where('cod_producto NOT IN (SELECT cod_producto FROM stock_sucursal WHERE id_sucursal = :id_sucursal AND id_almacen = :id_almacen )', { id_sucursal, id_almacen })
      .getMany();

    const count = result.length;

    serviceResult.boolean = count > 0 ? true : false;
    serviceResult.message = count + ' producto(s) que no están es stock general.';
    serviceResult.number = count;
    serviceResult.data = result;

    return serviceResult;
  }

  async update(cod_producto: string, updateProductoDto: UpdateProductoDto): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

    const updateObj = await this.productoRepository.update(cod_producto, updateProductoDto);

    serviceResult.boolean = updateObj.affected === 1 ? true : false;
    serviceResult.message = 'Se ha actualizado correctamente.';
    serviceResult.number = updateObj.affected;
    serviceResult.object = updateObj.affected === 1 ? updateObj : null;

    return serviceResult;
  }

  async remove(cod_producto: string): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

    const removeObj = await this.productoRepository.delete(cod_producto);

    serviceResult.boolean = removeObj.affected === 1 ? true : false;
    serviceResult.message = removeObj.affected === 1 ? 'Se ha eliminado correctamente.' : 'No se ha encontrado la producto';
    serviceResult.number = removeObj.affected;
    serviceResult.object = removeObj.affected === 1 ? removeObj : null;

    return serviceResult;
  }



}