import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus } from '@nestjs/common';
import { OperacionDetalleService } from './operacion-detalle.service';
import { OperacionDetalleDto } from './dto/operacion-detalle.dto';
import { UpdateOperacionDetalleDto } from './dto/update-operacion-detalle.dto';
import { ApiTags } from '@nestjs/swagger';
import { ApiResult } from 'src/common/interfaces/api.result';
import { routeOperacionDetalleAttribute, routeOperacionDetalleCreate, routeOperacionDetalleFindAll, routeOperacionDetalleFindBy, routeOperacionDetalleRemove, routeOperacionDetalleUpdate } from 'src/common/utils/routes/operacion-module/operacion-detalle.route';

@ApiTags('operacion-detalle')
@Controller('operacion-detalle')

export class OperacionDetalleController {

  constructor(private readonly operacionDetalleService: OperacionDetalleService) { }

  @Post(':cod_operacion')
  async create(@Param('cod_operacion') cod_operacion: string, @Body() array: [OperacionDetalleDto]): Promise<ApiResult> {
    let apiResult = { title: routeOperacionDetalleCreate.title, route: routeOperacionDetalleCreate.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {
      const result = await this.operacionDetalleService.create(cod_operacion, array);

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
    let apiResult = { title: routeOperacionDetalleFindAll.title, route: routeOperacionDetalleFindAll.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {
      const result = await this.operacionDetalleService.findAll(cod_operacion);

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
  async update(@Param('cod_operacion') cod_operacion: string, @Body() updateOperacionDetalleDto: UpdateOperacionDetalleDto): Promise<ApiResult> {
    let apiResult = { title: routeOperacionDetalleUpdate.title, route: routeOperacionDetalleUpdate.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {
      const result = await this.operacionDetalleService.update(cod_operacion, updateOperacionDetalleDto);

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
    let apiResult = { title: routeOperacionDetalleRemove.title, route: routeOperacionDetalleRemove.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {
      const result = await this.operacionDetalleService.remove(cod_operacion);

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
