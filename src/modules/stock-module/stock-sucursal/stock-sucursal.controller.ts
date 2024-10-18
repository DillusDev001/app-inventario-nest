import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus } from '@nestjs/common';
import { StockSucursalService } from './stock-sucursal.service';
import { StockSucursalDto } from './dto/stock-sucursal.dto';
import { UpdateStockSucursalDto } from './dto/update-stock-sucursal.dto';
import { ApiTags } from '@nestjs/swagger';
import { ApiResult } from 'src/common/interfaces/api.result';
import { routeStockSucursalCreate, routeStockSucursalCreateMultiple, routeStockSucursalFindAll, routeStockSucursalFindAttribute, routeStockSucursalFindCantidad, routeStockSucursalFindOne, routeStockSucursalRemove, routeStockSucursalUpdate } from 'src/common/utils/routes/stock-module/stocksucursal.route';

@ApiTags('stock-sucursal')
@Controller('stock-sucursal')
export class StockSucursalController {

  constructor(private readonly stockSucursalService: StockSucursalService) { }

  @Post()
  async create(@Body() stockSucursalDto: StockSucursalDto): Promise<ApiResult> {
    let apiResult = { title: routeStockSucursalCreate.title, route: routeStockSucursalCreate.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {
      const result = await this.stockSucursalService.create(stockSucursalDto);

      if (result.boolean) {
        apiResult.status = 'correct';
        apiResult.code = HttpStatus.OK;
        apiResult.message = result.message;
        apiResult.boolean = true;
        apiResult.data = [result.object]
      } else {
        apiResult.code = HttpStatus.BAD_REQUEST;
        apiResult.message = result.message;
      }
    } catch (error) {
      apiResult.code = error.status;
      apiResult.message = error;
    }

    return apiResult;
  }

  @Post(':id_sucursal/:id_almacen')
  async createMultiple(@Param('id_sucursal') id_sucursal: number, @Param('id_almacen') id_almacen: number): Promise<ApiResult> {
    let apiResult = { title: routeStockSucursalCreateMultiple.title, route: routeStockSucursalCreateMultiple.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {
      const result = await this.stockSucursalService.createMultipleNotIn(id_sucursal, id_almacen);

      if (result.boolean) {
        apiResult.status = 'correct';
        apiResult.code = HttpStatus.OK;
        apiResult.message = result.message;
        apiResult.rows = result.number;
        apiResult.boolean = true;
      } else {
        apiResult.code = HttpStatus.BAD_REQUEST;
        apiResult.message = result.message;
      }
    } catch (error) {
      apiResult.code = error.status;
      apiResult.message = error;
    }

    return apiResult;
  }

  @Get(':id_sucursal/:id_almacen')
  async findAll(@Param('id_sucursal') id_sucursal: number, @Param('id_almacen') id_almacen: number): Promise<ApiResult> {
    let apiResult = { title: routeStockSucursalFindAll.title, route: routeStockSucursalFindAll.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {
      const result = await this.stockSucursalService.findAll(id_sucursal, id_almacen);

      if (result.boolean) {
        apiResult.status = 'correct';
        apiResult.code = HttpStatus.OK;
        apiResult.message = result.message;
        apiResult.boolean = true;
        apiResult.rows = result.number;
        apiResult.data = result.data;
      } else {
        apiResult.code = HttpStatus.BAD_REQUEST;
        apiResult.message = result.message;
      }
    } catch (error) {
      apiResult.code = error.status;
      apiResult.message = error;
    }

    return apiResult;
  }

  @Get(':id_sucursal/:id_almacen/:cod_producto')
  async findOne(@Param('id_sucursal') id_sucursal: number, @Param('id_almacen') id_almacen: number, @Param('cod_producto') cod_producto: string): Promise<ApiResult> {
    let apiResult = { title: routeStockSucursalFindOne.title, route: routeStockSucursalFindOne.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {
      const result = await this.stockSucursalService.findOne(id_sucursal, id_almacen, cod_producto);

      if (result.boolean) {
        apiResult.status = 'correct';
        apiResult.code = HttpStatus.OK;
        apiResult.message = result.message;
        apiResult.boolean = true;
        apiResult.rows = result.number;
        apiResult.data = result.data
      } else {
        apiResult.code = HttpStatus.BAD_REQUEST;
        apiResult.message = result.message;
      }
    } catch (error) {
      apiResult.code = error.status;
      apiResult.message = error;
    }

    return apiResult;
  }

  @Get(':id_sucursal/:id_almacen/:attribute/:value')
  async findAttribute(
    @Param('id_sucursal') id_sucursal: number, @Param('id_almacen') id_almacen: number,
    @Param('attribute') attribute: string, @Param('value') value: string | number
  ): Promise<ApiResult> {
    let apiResult = { title: routeStockSucursalFindAttribute.title, route: routeStockSucursalFindAttribute.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {
      const result = await this.stockSucursalService.findAttribute(id_sucursal, id_almacen, attribute, value);

      if (result.boolean) {
        apiResult.status = 'correct';
        apiResult.code = HttpStatus.OK;
        apiResult.message = result.message;
        apiResult.boolean = true;
        apiResult.rows = result.number;
        apiResult.data = result.data
      } else {
        apiResult.code = HttpStatus.BAD_REQUEST;
        apiResult.message = result.message;
      }
    } catch (error) {
      apiResult.code = error.status;
      apiResult.message = error;
    }

    return apiResult;
  }

  @Get(':cod_producto')
  async findCantidad(@Param('cod_producto') cod_producto: string): Promise<ApiResult> {
    let apiResult = { title: routeStockSucursalFindCantidad.title, route: routeStockSucursalFindCantidad.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {
      const result = await this.stockSucursalService.findCantidad(cod_producto);

      apiResult.status = 'correct';
      apiResult.code = HttpStatus.OK;
      apiResult.message = result.message;
      apiResult.boolean = true;
      apiResult.rows = result.number;
      apiResult.data = result.data;
    } catch (error) {
      apiResult.code = error.status;
      apiResult.message = error;
    }

    return apiResult;
  }

  @Patch(':id_sucursal/:id_almacen/:cod_producto')
  async update(@Param('id_sucursal') id_sucursal: number, @Param('id_almacen') id_almacen: number, @Param('cod_producto') cod_producto: string, @Body() updateStockSucursalDto: UpdateStockSucursalDto): Promise<ApiResult> {
    let apiResult = { title: routeStockSucursalUpdate.title, route: routeStockSucursalUpdate.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {
      const result = await this.stockSucursalService.update(id_sucursal, id_almacen, cod_producto, updateStockSucursalDto);

      if (result.boolean) {
        apiResult.status = 'correct';
        apiResult.code = HttpStatus.OK;
        apiResult.message = result.message;
        apiResult.boolean = true;
        apiResult.rows = result.number;
      } else {
        apiResult.code = HttpStatus.BAD_REQUEST;
        apiResult.message = result.message;
      }
    } catch (error) {
      apiResult.code = error.status;
      apiResult.message = error;
    }

    return apiResult;
  }

  @Delete(':id_sucursal/:id_almacen/:cod_producto')
  async remove(@Param('id_sucursal') id_sucursal: number, @Param('id_almacen') id_almacen: number, @Param('cod_producto') cod_producto: string): Promise<ApiResult> {
    let apiResult = { title: routeStockSucursalRemove.title, route: routeStockSucursalRemove.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {
      const result = await this.stockSucursalService.remove(id_sucursal, id_almacen, cod_producto);

      if (result.boolean) {
        apiResult.status = 'correct';
        apiResult.code = HttpStatus.OK;
        apiResult.message = result.message;
        apiResult.boolean = true;
        apiResult.rows = result.number;
      } else {
        apiResult.code = HttpStatus.BAD_REQUEST;
        apiResult.message = result.message;
      }
    } catch (error) {
      apiResult.code = error.status;
      apiResult.message = error;
    }

    return apiResult;
  }

}