import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus } from '@nestjs/common';
import { StockGeneralService } from './stock-general.service';
import { StockGeneralDto } from './dto/stock-general.dto';
import { UpdateStockGeneralDto } from './dto/update-stock-general.dto';
import { ApiTags } from '@nestjs/swagger';
import { ApiResult } from 'src/common/interfaces/api.result';
import { routeStockGeneralAttribute, routeStockGeneralCreate, routeStockGeneralCreateMultiple, routeStockGeneralFindAll, routeStockGeneralFindBy, routeStockGeneralRemove, routeStockGeneralUpdate } from 'src/common/utils/routes/stock-module/stockgeneral.route';

@ApiTags('stock-general')
@Controller('stock-general')
export class StockGeneralController {

  constructor(private readonly stockGeneralService: StockGeneralService) { }

  @Post()
  async create(@Body() stockGeneralDto: StockGeneralDto): Promise<ApiResult> {
    let apiResult = { title: routeStockGeneralCreate.title, route: routeStockGeneralCreate.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {
      const result = await this.stockGeneralService.create(stockGeneralDto);

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

  @Post('multiple')
  async createMultiple(): Promise<ApiResult> {
    let apiResult = { title: routeStockGeneralCreateMultiple.title, route: routeStockGeneralCreateMultiple.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {
      const result = await this.stockGeneralService.createMultipleNotIn();

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

  @Get()
  async findAll(): Promise<ApiResult> {
    let apiResult = { title: routeStockGeneralFindAll.title, route: routeStockGeneralFindAll.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {
      const result = await this.stockGeneralService.findAll();

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

  @Get(':cod_producto')
  async findBy(@Param('cod_producto') cod_producto: string): Promise<ApiResult> {
    let apiResult = { title: routeStockGeneralFindBy.title, route: routeStockGeneralFindBy.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {
      const result = await this.stockGeneralService.findByID(cod_producto);

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

  @Get('busqueda/:attribute/:value')
  async findAtribute(@Param('attribute') attribute: string, @Param('value') value: string): Promise<ApiResult> {
    let apiResult = { title: routeStockGeneralAttribute.title, route: routeStockGeneralAttribute.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {
      const result = await this.stockGeneralService.findAtribute(attribute, value);

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
      apiResult.message = error.code;
    }

    return apiResult;
  }

  @Patch(':cod_producto')
  async update(@Param('cod_producto') cod_producto: string, @Body() updateStockGeneralDto: UpdateStockGeneralDto): Promise<ApiResult> {
    let apiResult = { title: routeStockGeneralUpdate.title, route: routeStockGeneralUpdate.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {
      const result = await this.stockGeneralService.update(cod_producto, updateStockGeneralDto);

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

  @Delete(':cod_producto')
  async remove(@Param('cod_producto') cod_producto: string): Promise<ApiResult> {
    let apiResult = { title: routeStockGeneralRemove.title, route: routeStockGeneralRemove.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {
      const result = await this.stockGeneralService.remove(cod_producto);

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