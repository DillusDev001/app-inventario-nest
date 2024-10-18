import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { ClienteDto } from './dto/cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { ApiTags } from '@nestjs/swagger';
import { ApiResult } from 'src/common/interfaces/api.result';
import { routeClienteAttribute, routeClienteCreate, routeClienteFindAll, routeClienteFindBy, routeClienteRemove, routeClienteUpdate } from 'src/common/utils/routes/cliente-module/cliente.route';

@ApiTags('cliente')
@Controller('cliente')
export class ClienteController {

  constructor(private readonly clienteService: ClienteService) { }

  @Post()
  async create(@Body() clienteDto: ClienteDto): Promise<ApiResult> {
    let apiResult = { title: routeClienteCreate.title, route: routeClienteCreate.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {
      const result = await this.clienteService.create(clienteDto);

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
    let apiResult = { title: routeClienteFindAll.title, route: routeClienteFindAll.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {
      const result = await this.clienteService.findAll();

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

  @Get(':id_cliente')
  async findById(@Param('id_cliente') id_cliente: number): Promise<ApiResult> {
    let apiResult = { title: routeClienteFindBy.title, route: routeClienteFindBy.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {
      const result = await this.clienteService.findById(id_cliente);

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
    let apiResult = { title: routeClienteAttribute.title, route: routeClienteAttribute.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {
      const result = await this.clienteService.findAtribute(attribute, value);

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

  @Patch(':id_cliente')
  async update(@Param('id_cliente') id_cliente: number, @Body() updateClienteDto: UpdateClienteDto): Promise<ApiResult> {
    let apiResult = { title: routeClienteUpdate.title, route: routeClienteUpdate.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {
      const result = await this.clienteService.update(id_cliente, updateClienteDto);

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
    let apiResult = { title: routeClienteRemove.title, route: routeClienteRemove.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {
      const result = await this.clienteService.remove(id_cliente);

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