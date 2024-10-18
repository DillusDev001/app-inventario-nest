import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus } from '@nestjs/common';
import { OperacionSaldoService } from './operacion-saldo.service';
import { OperacionSaldoDto } from './dto/operacion-saldo.dto';
import { UpdateOperacionSaldoDto } from './dto/update-operacion-saldo.dto';
import { ApiTags } from '@nestjs/swagger';
import { ApiResult } from 'src/common/interfaces/api.result';
import { routeOperacionSaldoCreate, routeOperacionSaldoFindAll, routeOperacionSaldoFindBy, routeOperacionSaldoRemove, routeOperacionSaldoUpdate } from 'src/common/utils/routes/operacion-module/operacion-saldo.route';

@ApiTags('operacion-saldo')
@Controller('operacion-saldo')
export class OperacionSaldoController {

  constructor(private readonly operacionSaldoService: OperacionSaldoService) { }

  @Post()
  async create(@Body() operacionSaldoDto: OperacionSaldoDto): Promise<ApiResult> {
    let apiResult = { title: routeOperacionSaldoCreate.title, route: routeOperacionSaldoCreate.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {
      const result = await this.operacionSaldoService.create(operacionSaldoDto);

      if (result.boolean) {
        apiResult.status = 'correct';
        apiResult.code = HttpStatus.OK;
        apiResult.message = result.message;
        apiResult.boolean = true;
        apiResult.rows = result.number;
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

  @Get()
  async findAll(): Promise<ApiResult> {
    let apiResult = { title: routeOperacionSaldoFindAll.title, route: routeOperacionSaldoFindAll.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {
      const result = await this.operacionSaldoService.findAll();

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

  @Get(':cod_operacion')
  async findById(@Param('cod_operacion') cod_operacion: string): Promise<ApiResult> {
    let apiResult = { title: routeOperacionSaldoFindBy.title, route: routeOperacionSaldoFindBy.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {
      const result = await this.operacionSaldoService.findById(cod_operacion);

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

  @Patch(':cod_operacion')
  async update(@Param('cod_operacion') cod_operacion: string, @Body() updateOperacionSaldoDto: UpdateOperacionSaldoDto): Promise<ApiResult> {
    let apiResult = { title: routeOperacionSaldoUpdate.title, route: routeOperacionSaldoUpdate.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {
      const result = await this.operacionSaldoService.update(cod_operacion, updateOperacionSaldoDto);

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

  @Delete(':cod_operacion')
  async remove(@Param('cod_operacion') cod_operacion: string): Promise<ApiResult> {
    let apiResult = { title: routeOperacionSaldoRemove.title, route: routeOperacionSaldoRemove.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {
      const result = await this.operacionSaldoService.remove(cod_operacion);

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