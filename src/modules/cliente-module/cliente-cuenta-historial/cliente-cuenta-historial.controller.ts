import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus } from '@nestjs/common';
import { ClienteCuentaHistorialService } from './cliente-cuenta-historial.service';
import { ApiTags } from '@nestjs/swagger';
import { ApiResult } from 'src/common/interfaces/api.result';
import { ClienteCuentaHistorialDto } from './dto/cliente-cuenta-historial.dto';
import { routeClienteCuentaHistorialCreate, routeClienteCuentaHistorialFindBy, routeClienteCuentaHistorialRemove, routeClienteCuentaHistorialUpdate } from 'src/common/utils/routes/cliente-module/cliente-cuenta-historial.route';
import { UpdateClienteCuentaHistorialDto } from './dto/update-cliente-cuenta-historial.dto';

@ApiTags('cliente-cuenta-historial')
@Controller('cliente-cuenta-historial')
export class ClienteCuentaHistorialController {

  constructor(private readonly clienteCreditoHistorialService: ClienteCuentaHistorialService) {}

  @Post()
  async create(@Body() clienteCuentaHistorialDto: ClienteCuentaHistorialDto): Promise<ApiResult> {
    let apiResult = { title: routeClienteCuentaHistorialCreate.title, route: routeClienteCuentaHistorialCreate.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;
    try {
      const result = await this.clienteCreditoHistorialService.create(clienteCuentaHistorialDto);

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

  @Get(':id_cliente')
  async findById(@Param('id_cliente') id_cliente: number): Promise<ApiResult> {
    let apiResult = { title: routeClienteCuentaHistorialFindBy.title, route: routeClienteCuentaHistorialFindBy.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {
      const result = await this.clienteCreditoHistorialService.findById(id_cliente);

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
  async update(@Param('id_historial') id_historial: number, @Body() updateClienteCuentaHistorialDto: UpdateClienteCuentaHistorialDto): Promise<ApiResult> {
    let apiResult = { title: routeClienteCuentaHistorialUpdate.title, route: routeClienteCuentaHistorialUpdate.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {
      const result = await this.clienteCreditoHistorialService.update(id_historial, updateClienteCuentaHistorialDto);

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
    let apiResult = { title: routeClienteCuentaHistorialRemove.title, route: routeClienteCuentaHistorialRemove.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {
      const result = await this.clienteCreditoHistorialService.remove(id_historial);

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
