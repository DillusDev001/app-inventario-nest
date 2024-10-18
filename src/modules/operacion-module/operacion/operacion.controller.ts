import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus } from '@nestjs/common'; 
import { OperacionService } from './operacion.service';
import { OperacionDto } from './dto/operacion.dto';
import { UpdateOperacionDto } from './dto/update-operacion.dto';
import { ApiResult } from 'src/common/interfaces/api.result';
import { routeOperacionAttribute, routeOperacionCreate, routeOperacionFindAll, routeOperacionFindBy, routeOperacionRemove, routeOperacionUpdate } from 'src/common/utils/routes/operacion-module/operacion.route';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('operacion')
@Controller('operacion')
export class OperacionController {

  constructor(private readonly operacionService: OperacionService) { }

  @Post()
  async create(@Body() operacionDto: OperacionDto): Promise<ApiResult> {
    let apiResult = { title: routeOperacionCreate.title, route: routeOperacionCreate.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {
      const result = await this.operacionService.create(operacionDto);

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
    let apiResult = { title: routeOperacionFindAll.title, route: routeOperacionFindAll.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {
      const result = await this.operacionService.findAll();

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
    let apiResult = { title: routeOperacionFindBy.title, route: routeOperacionFindBy.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {
      const result = await this.operacionService.findById(cod_operacion);

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

  @Get('busqueda/:attribute/:value')
  async findAtribute(@Param('attribute') attribute: string, @Param('value') value: string): Promise<ApiResult> {
    let apiResult = { title: routeOperacionAttribute.title, route: routeOperacionAttribute.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {
      const result = await this.operacionService.findAtribute(attribute, value);

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

  @Patch(':cod_operacion')
  async update(@Param('cod_operacion') cod_operacion: string, @Body() updateOperacionDto: UpdateOperacionDto): Promise<ApiResult> {
    let apiResult = { title: routeOperacionUpdate.title, route: routeOperacionUpdate.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {
      const result = await this.operacionService.update(cod_operacion, updateOperacionDto);

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
    let apiResult = { title: routeOperacionRemove.title, route: routeOperacionRemove.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {
      const result = await this.operacionService.remove(cod_operacion);

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