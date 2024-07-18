import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StockGeneralService } from './stock-general.service';
import { StockGeneralDto } from './dto/stock-general.dto';
import { UpdateStockGeneralDto } from './dto/update-stock-general.dto';
import { ApiTags } from '@nestjs/swagger';
import { ApiResult } from 'src/common/interfaces/api.result';
import { routeStockGeneralCreate, routeStockGeneralFindAll, routeStockGeneralFindBy, routeStockGeneralRemove, routeStockGeneralUpdate } from 'src/common/utils/routes/stockgeneral.route';

@ApiTags('stock-general')
@Controller('stock-general')
export class StockGeneralController {

  constructor(private readonly stockGeneralService: StockGeneralService) { }

  @Post()
  async create(@Body() stockGeneralDto: StockGeneralDto): Promise<ApiResult> {
    let apiResult = { title: routeStockGeneralCreate.title, route: routeStockGeneralCreate.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {

    } catch (error) {

    }

    return apiResult;
  }

  @Get()
  async findAll(): Promise<ApiResult> {
    let apiResult = { title: routeStockGeneralFindAll.title, route: routeStockGeneralFindAll.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {

    } catch (error) {

    }

    return apiResult;
  }

  @Get()
  async findBy(): Promise<ApiResult> {
    let apiResult = { title: routeStockGeneralFindBy.title, route: routeStockGeneralFindBy.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {

    } catch (error) {

    }

    return apiResult;
  }

  @Patch()
  async update(@Body() updateStockGeneralDto: UpdateStockGeneralDto): Promise<ApiResult> {
    let apiResult = { title: routeStockGeneralUpdate.title, route: routeStockGeneralUpdate.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {

    } catch (error) {

    }

    return apiResult;
  }

  @Delete()
  async remove(): Promise<ApiResult> {
    let apiResult = { title: routeStockGeneralRemove.title, route: routeStockGeneralRemove.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {

    } catch (error) {

    }

    return apiResult;
  }

}