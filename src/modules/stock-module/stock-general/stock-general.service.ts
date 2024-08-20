import { Injectable } from '@nestjs/common';
import { StockGeneralDto } from './dto/stock-general.dto';
import { UpdateStockGeneralDto } from './dto/update-stock-general.dto';
import { StockGeneral } from './entities/stock-general.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ServiceResult } from 'src/common/interfaces/service.result';
import { ProductoService } from 'src/modules/producto/producto.service';

@Injectable()
export class StockGeneralService {

  constructor(
    @InjectRepository(StockGeneral) private stockGeneralRepository: Repository<StockGeneral>,
    private productoService: ProductoService
  ) { }

  async create(stockGeneralDto: StockGeneralDto): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

    const newObj = this.stockGeneralRepository.create(stockGeneralDto);
    await this.stockGeneralRepository.save(newObj);

    serviceResult.boolean = true;
    serviceResult.message = 'La cantidad se ha agregado correctamente a stock.';
    serviceResult.number = 1;
    serviceResult.object = newObj;

    return serviceResult;
  }

  async createMultiple(): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

    const result = await this.productoService.findNotStockGeneral();

    if (result.number > 0) {
      let stockData = [] as StockGeneralDto[];

      result.data.forEach(p => {
        const s = {
          cod_producto: p.cod_producto,
          cantidad: 0
        } as unknown as StockGeneralDto

        stockData.push(s);
      });

      const newObj = await this.stockGeneralRepository.save(stockData);

      serviceResult.boolean = true
      serviceResult.message = 'Se han agregado ' + stockData.length + ' producto(s) correctamente.';
      serviceResult.number = stockData.length;
    } else {
      serviceResult.message = 'Todos los productos han sido agregados a StockGeneral.';
    }

    return serviceResult;
  }

  async findAll(): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

    const result = await this.stockGeneralRepository.find({ order: { cod_producto: 'ASC' } });
    const count = result.length;

    if (count > 0) {
      for (let i = 0; i < count; i++) {
        const resultProducto = await this.productoService.findByID(result[i].cod_producto);

        if (resultProducto.boolean) {
          result[i]['producto'] = resultProducto.object;
        } else {
          result[i]['producto'] = null;
        }
      }
    }

    serviceResult.boolean = count > 0 ? true : false;
    serviceResult.message = count + ' producto(s) en stock encontrado(s).';
    serviceResult.number = count;
    serviceResult.data = result;

    return serviceResult;
  }

  async findByID(cod_producto: string): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

    const result = await this.stockGeneralRepository.find({ where: { cod_producto: cod_producto } });
    const count = result.length;

    if (count > 0) {
      for (let i = 0; i < count; i++) {
        const resultProducto = await this.productoService.findByID(result[i].cod_producto);

        if (resultProducto.boolean) {
          result[i]['producto'] = resultProducto.object;
        } else {
          result[i]['producto'] = null;
        }
      }
    }

    serviceResult.boolean = count === 1 ? true : false;
    serviceResult.message = count === 1 ? 'Se ha encontrado.' : 'No se ha encontrado producto en stock.';
    serviceResult.number = count;
    serviceResult.data = result;

    return serviceResult;
  }

  async update(cod_producto: string, updateStockGeneralDto: UpdateStockGeneralDto): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

    const updateObj = await this.stockGeneralRepository.update(cod_producto, updateStockGeneralDto);

    serviceResult.boolean = updateObj.affected === 1 ? true : false;
    serviceResult.message = updateObj.affected === 1 ? 'Se ha actualizado correctamente.' : 'No se ha actualizado.';
    serviceResult.number = updateObj.affected;

    return serviceResult;
  }

  async remove(cod_producto: string): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

    const removeObj = await this.stockGeneralRepository.delete(cod_producto);

    serviceResult.boolean = removeObj.affected === 1 ? true : false;
    serviceResult.message = removeObj.affected === 1 ? 'Se ha eliminado correctamente.' : 'No se ha encontrado el producto en stock.';
    serviceResult.number = removeObj.affected;
    serviceResult.object = removeObj.affected === 1 ? removeObj : null;

    return serviceResult;
  }

}