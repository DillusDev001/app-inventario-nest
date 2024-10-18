import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus } from '@nestjs/common';
import { OperacionSaldoHistorialService } from './operacion-saldo-historial.service';
import { OperacionSaldoHistorialDto } from './dto/operacion-saldo-historial.dto';
import { UpdateOperacionSaldoHistorialDto } from './dto/update-operacion-saldo-historial.dto';
import { ApiTags } from '@nestjs/swagger';
import { ApiResult } from 'src/common/interfaces/api.result';
import { routeOperacionSaldoHistorialCreate, routeOperacionSaldoHistorialFindBy, routeOperacionSaldoHistorialRemove, routeOperacionSaldoHistorialUpdate } from 'src/common/utils/routes/operacion-module/operacion-saldo-historial.route';

@ApiTags('operacion-saldo-historial')
@Controller('operacion-saldo-historial')
export class OperacionSaldoHistorialController {
  
  constructor(private readonly operacionSaldoHistorialService: OperacionSaldoHistorialService) {}

  @Post()
  async create(@Body() operacionSaldoHistorialDto: OperacionSaldoHistorialDto): Promise<ApiResult> {
    let apiResult = { title: routeOperacionSaldoHistorialCreate.title, route: routeOperacionSaldoHistorialCreate.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;
    try {
      const result = await this.operacionSaldoHistorialService.create(operacionSaldoHistorialDto);

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
  async findById(@Param('cod_operacion') cod_operacion: string): Promise<ApiResult> {
    let apiResult = { title: routeOperacionSaldoHistorialFindBy.title, route: routeOperacionSaldoHistorialFindBy.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {
      const result = await this.operacionSaldoHistorialService.findById(cod_operacion);

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

  @Patch(':id_historial')
  async update(@Param('id_historial') id_historial: number, @Body() updateOperacionSaldoHistorialDto: UpdateOperacionSaldoHistorialDto): Promise<ApiResult> {
    let apiResult = { title: routeOperacionSaldoHistorialUpdate.title, route: routeOperacionSaldoHistorialUpdate.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {
      const result = await this.operacionSaldoHistorialService.update(id_historial, updateOperacionSaldoHistorialDto);

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

  @Delete(':id_historial')
  async remove(@Param('id_historial') id_historial: number): Promise<ApiResult> {
    let apiResult = { title: routeOperacionSaldoHistorialRemove.title, route: routeOperacionSaldoHistorialRemove.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {
      const result = await this.operacionSaldoHistorialService.remove(id_historial);

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
