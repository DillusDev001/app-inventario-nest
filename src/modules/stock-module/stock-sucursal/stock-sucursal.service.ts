import { Injectable } from '@nestjs/common';
import { StockSucursalDto } from './dto/stock-sucursal.dto';
import { UpdateStockSucursalDto } from './dto/update-stock-sucursal.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { StockSucursal } from './entities/stock-sucursal.entity';
import { Repository } from 'typeorm';
import { ServiceResult } from 'src/common/interfaces/service.result';
import { ProductoService } from 'src/modules/producto/producto.service';
import { SucursalService } from 'src/modules/sucursal/sucursal.service';
import { AlmacenService } from 'src/modules/almacen/almacen.service';
import { StockGeneralService } from '../stock-general/stock-general.service';
import { StockGeneralDto } from '../stock-general/dto/stock-general.dto';

@Injectable()
export class StockSucursalService {

  constructor(
    @InjectRepository(StockSucursal) private stockSucursalRepository: Repository<StockSucursal>,
    private sucursalService: SucursalService,
    private almacenService: AlmacenService,
    private productoService: ProductoService,
    private stockGeneralService: StockGeneralService
  ) { }

  async create(stockSucursalDto: StockSucursalDto): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

    const newObj = this.stockSucursalRepository.create(stockSucursalDto);
    await this.stockSucursalRepository.save(newObj);

    serviceResult.boolean = true;
    serviceResult.message = 'La cantidad se ha agregado correctamente a stock.';
    serviceResult.number = 1;
    serviceResult.object = newObj;

    return serviceResult;
  }

  async createMultipleNotIn(id_sucursal: number, id_almacen: number): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

    const result = await this.productoService.findNotStockSucursal(id_sucursal, id_almacen);

    if (result.number > 0) {
      let stockData = [] as StockSucursalDto[];

      result.data.forEach(p => {
        const s = {
          cod_producto: p.cod_producto,
          id_sucursal: id_sucursal,
          id_almacen: id_almacen,
          cantidad: 0
        } as unknown as StockSucursalDto

        stockData.push(s);
      });

      const newObj = await this.stockSucursalRepository.save(stockData);

      serviceResult.boolean = true
      serviceResult.message = 'Se han agregado ' + stockData.length + ' producto(s) correctamente.';
      serviceResult.number = stockData.length;
    } else {
      serviceResult.message = 'Todos los productos han sido agregados a Stock Sucursal.';
    }

    return serviceResult;
  }

  async findAll(id_sucursal: number, id_almacen: number): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

    const result = await this.stockSucursalRepository.find({ where: { id_sucursal, id_almacen }, order: { cod_producto: 'ASC' } });
    const count = result.length;

    if (count > 0) {
      for (let i = 0; i < count; i++) {
        // ****** SUCURSAL ******
        const resultSucursal = await this.sucursalService.findByID(result[i].id_sucursal);

        if (resultSucursal.boolean) {
          result[i]['sucursal'] = resultSucursal.data[0];
        } else {
          result[i]['sucursal'] = null;
        }

        // ****** ALMACEN ******
        const resultAlmacen = await this.almacenService.findByID(result[i].id_almacen);

        if (resultAlmacen.boolean) {
          result[i]['almacen'] = resultAlmacen.data[0];
        } else {
          result[i]['almacen'] = null;
        }

        // ****** PRODUCTO ******
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

  async findOne(id_sucursal: number, id_almacen: number, cod_producto: string): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

    const result = await this.stockSucursalRepository.find({ where: { id_sucursal, id_almacen, cod_producto } });
    const count = result.length;

    if (count > 0) {
      for (let i = 0; i < count; i++) {
        // ****** SUCURSAL ******
        const resultSucursal = await this.sucursalService.findByID(result[i].id_sucursal);

        if (resultSucursal.boolean) {
          result[i]['sucursal'] = resultSucursal.data[0];
        } else {
          result[i]['sucursal'] = null;
        }

        // ****** ALMACEN ******
        const resultAlmacen = await this.almacenService.findByID(result[i].id_almacen);

        if (resultAlmacen.boolean) {
          result[i]['almacen'] = resultAlmacen.data[0];
        } else {
          result[i]['almacen'] = null;
        }

        // ****** PRODUCTO ******
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

  async findAttribute(id_sucursal: number, id_almacen: number, attribute: string, value: string | number): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

    const result = await this.stockSucursalRepository
      .createQueryBuilder()
      .where('id_sucursal = :id_sucursal', { id_sucursal: id_sucursal })
      .andWhere('id_almacen = :id_almacen', { id_almacen: id_almacen })
      .andWhere(attribute + " like :value", { value: '%' + value + '%' })
      .getMany()

    const count = result.length;

    if (count > 0) {
      for (let i = 0; i < count; i++) {
        // ****** SUCURSAL ******
        const resultSucursal = await this.sucursalService.findByID(result[i].id_sucursal);

        if (resultSucursal.boolean) {
          result[i]['sucursal'] = resultSucursal.data[0];
        } else {
          result[i]['sucursal'] = null;
        }

        // ****** ALMACEN ******
        const resultAlmacen = await this.almacenService.findByID(result[i].id_almacen);

        if (resultAlmacen.boolean) {
          result[i]['almacen'] = resultAlmacen.data[0];
        } else {
          result[i]['almacen'] = null;
        }

        // ****** PRODUCTO ******
        const resultProducto = await this.productoService.findByID(result[i].cod_producto);

        if (resultProducto.boolean) {
          result[i]['producto'] = resultProducto.object;
        } else {
          result[i]['producto'] = null;
        }
      }
    }

    serviceResult.boolean = count > 0 ? true : false;
    serviceResult.message = count + ' producto(s) encontrado(s).';
    serviceResult.number = count;
    serviceResult.data = result;

    return serviceResult;
  }

  async findCantidad(cod_producto: string): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

    const resultSuma = await this.stockSucursalRepository
      .createQueryBuilder()
      .select('SUM(cantidad)', 'total')
      .where('cod_producto = :cod_producto', { cod_producto: cod_producto })
      .getRawOne();

    const resultGeneral = await this.stockGeneralService.findByID(cod_producto);

    if (resultGeneral.boolean) {
      const objProducto = resultGeneral.data[0] as StockGeneralDto;

      const max = objProducto.cantidad - Number(resultSuma['total']);

      serviceResult.boolean = true;
      serviceResult.message = 'Datos de cantidad.';
      serviceResult.number = 1;
      serviceResult.data = [
        {
          'cod_producto': objProducto.cod_producto,
          'cantidad': objProducto.cantidad,
          'max': max
        }
      ];
    }

    return serviceResult;
  }

  async update(id_sucursal: number, id_almacen: number, cod_producto: string, updateStockSucursalDto: UpdateStockSucursalDto): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

    const updateObj = await this.stockSucursalRepository.update({ id_sucursal, id_almacen, cod_producto }, updateStockSucursalDto);

    /*await this.stockSucursalRepository.createQueryBuilder()
      .update()
      .set(updateStockSucursalDto)
      .where("id_sucursal = :id_sucursal", { id_sucursal: id_sucursal })
      .andWhere("id_almacen = :id_almacen", { id_almacen: id_almacen })
      .andWhere("cod_producto = :codProducto", { codProducto: cod_producto })
      .execute();*/

    serviceResult.boolean = updateObj.affected === 1 ? true : false;
    serviceResult.message = updateObj.affected === 1 ? 'Se ha actualizado correctamente.' : 'No se ha actualizado.';
    serviceResult.number = updateObj.affected;

    return serviceResult;
  }

  async remove(id_sucursal: number, id_almacen: number, cod_producto: string): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

    const removeObj = await this.stockSucursalRepository.delete({ id_sucursal, id_almacen, cod_producto });

    serviceResult.boolean = removeObj.affected === 1 ? true : false;
    serviceResult.message = removeObj.affected === 1 ? 'Se ha eliminado correctamente.' : 'No se ha encontrado el producto en stock.';
    serviceResult.number = removeObj.affected;
    serviceResult.object = removeObj.affected === 1 ? removeObj : null;

    return serviceResult;
  }

}