import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StockSucursalService } from './stock-sucursal.service';
import { StockSucursalDto } from './dto/stock-sucursal.dto';
import { UpdateStockSucursalDto } from './dto/update-stock-sucursal.dto';
import { ApiTags } from '@nestjs/swagger';
import { ApiResult } from 'src/common/interfaces/api.result';
import { routeStockSucursalCreate, routeStockSucursalFindAll, routeStockSucursalFindBy, routeStockSucursalRemove, routeStockSucursalUpdate } from 'src/common/utils/routes/stocksucursal.route';

@ApiTags('stock-sucursal')
@Controller('stock-sucursal')
export class StockSucursalController {

  constructor(private readonly stockSucursalService: StockSucursalService) { }

  @Post()
  async create(@Body() stockSucursalDto: StockSucursalDto): Promise<ApiResult> {
    let apiResult = { title: routeStockSucursalCreate.title, route: routeStockSucursalCreate.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {

    } catch (error) {

    }

    return apiResult;
  }

  @Get()
  async findAll(): Promise<ApiResult> {
    let apiResult = { title: routeStockSucursalFindAll.title, route: routeStockSucursalFindAll.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {

    } catch (error) {

    }

    return apiResult;
  }

  @Get()
  async findBy(): Promise<ApiResult> {
    let apiResult = { title: routeStockSucursalFindBy.title, route: routeStockSucursalFindBy.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {

    } catch (error) {

    }

    return apiResult;
  }

  @Patch()
  async update(@Body() updateStockSucursalDto: UpdateStockSucursalDto): Promise<ApiResult> {
    let apiResult = { title: routeStockSucursalUpdate.title, route: routeStockSucursalUpdate.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {

    } catch (error) {

    }

    return apiResult;
  }

  @Delete()
  async remove(): Promise<ApiResult> {
    let apiResult = { title: routeStockSucursalRemove.title, route: routeStockSucursalRemove.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {

    } catch (error) {

    }

    return apiResult;
  }

}