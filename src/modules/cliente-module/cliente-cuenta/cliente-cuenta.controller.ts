import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus } from '@nestjs/common';
import { ClienteCuentaService } from './cliente-cuenta.service';
import { ApiTags } from '@nestjs/swagger';
import { routeClienteCuentaCreate, routeClienteCuentaFindBy, routeClienteCuentaRemove, routeClienteCuentaUpdate } from 'src/common/utils/routes/cliente-cuenta.route';
import { ApiResult } from 'src/common/interfaces/api.result';
import { ClienteCuentaDto } from './dto/cliente-cuenta.dto';
import { UpdateClienteCuentaDto } from './dto/update-cliente-cuenta.dto';

@ApiTags('cliente-cuenta')
@Controller('cliente-cuenta')
export class ClienteCuentaController {

  constructor(private readonly clienteCreditoService: ClienteCuentaService) {}

  @Post()
  async create(@Body() clienteCuentaDto: ClienteCuentaDto): Promise<ApiResult> {
    let apiResult = { title: routeClienteCuentaCreate.title, route: routeClienteCuentaCreate.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;
    try {
      const result = await this.clienteCreditoService.create(clienteCuentaDto);

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
    let apiResult = { title: routeClienteCuentaFindBy.title, route: routeClienteCuentaFindBy.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {
      const result = await this.clienteCreditoService.findById(id_cliente);

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

  @Patch(':id_cliente')
  async update(@Param('id_cliente') id_cliente: number, @Body() updateClienteCuentaDto: UpdateClienteCuentaDto): Promise<ApiResult> {
    let apiResult = { title: routeClienteCuentaUpdate.title, route: routeClienteCuentaUpdate.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {
      const result = await this.clienteCreditoService.update(id_cliente, updateClienteCuentaDto);

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

  @Delete(':id_cliente')
  async remove(@Param('id_cliente') id_cliente: number): Promise<ApiResult> {
    let apiResult = { title: routeClienteCuentaRemove.title, route: routeClienteCuentaRemove.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {
      const result = await this.clienteCreditoService.remove(id_cliente);

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
