import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus } from '@nestjs/common';
import { OperacionPagoService } from './operacion-pago.service';
import { OperacionPagoDto } from './dto/operacion-pago.dto';
import { UpdateOperacionPagoDto } from './dto/update-operacion-pago.dto';
import { ApiTags } from '@nestjs/swagger';
import { ApiResult } from 'src/common/interfaces/api.result';
import { routeOperacionPagoCreate, routeOperacionPagoFindAll, routeOperacionPagoRemove, routeOperacionPagoUpdate } from 'src/common/utils/routes/operacion-module/operacion-pago.route';

@ApiTags('operacion-pago')
@Controller('operacion-pago')
export class OperacionPagoController {

  constructor(private readonly operacionPagoService: OperacionPagoService) { }

  @Post(':cod_operacion')
  async create(@Param('cod_operacion') cod_operacion: string, @Body() array: [OperacionPagoDto]): Promise<ApiResult> {
    let apiResult = { title: routeOperacionPagoCreate.title, route: routeOperacionPagoCreate.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {
      const result = await this.operacionPagoService.create(cod_operacion, array);

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

  @Get(':cod_operacion')
  async findAll(@Param('cod_operacion') cod_operacion: string): Promise<ApiResult> {
    let apiResult = { title: routeOperacionPagoFindAll.title, route: routeOperacionPagoFindAll.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {
      const result = await this.operacionPagoService.findAll(cod_operacion);

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
  async update(@Param('cod_operacion') cod_operacion: string, @Body() updateOperacionPagoDto: UpdateOperacionPagoDto): Promise<ApiResult> {
    let apiResult = { title: routeOperacionPagoUpdate.title, route: routeOperacionPagoUpdate.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {
      const result = await this.operacionPagoService.update(cod_operacion, updateOperacionPagoDto);

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
    let apiResult = { title: routeOperacionPagoRemove.title, route: routeOperacionPagoRemove.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {
      const result = await this.operacionPagoService.remove(cod_operacion);

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