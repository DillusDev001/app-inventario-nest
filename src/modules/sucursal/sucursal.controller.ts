import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus } from '@nestjs/common';
import { SucursalService } from './sucursal.service';
import { SucursalDto } from './dto/sucursal.dto';
import { UpdateSucursalDto } from './dto/update-sucursal.dto';
import { ApiTags } from '@nestjs/swagger';
import { ApiResult } from 'src/common/interfaces/api.result';
import { routeSucursalCreate, routeSucursalFindAll, routeSucursalFindBy, routeSucursalRemove, routeSucursalUpdate } from 'src/common/utils/routes/sucursal.route';

@ApiTags('sucursal')
@Controller('sucursal')
export class SucursalController {

  constructor(private readonly sucursalService: SucursalService) { }

  @Post()
  async create(@Body() sucursalDto: SucursalDto): Promise<ApiResult> {
    let apiResult = { title: routeSucursalCreate.title, route: routeSucursalCreate.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {
      const result = await this.sucursalService.create(sucursalDto);

      if (result.boolean) {
        apiResult.status = 'correct';
        apiResult.code = HttpStatus.OK;
        apiResult.message = result.message;
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
    let apiResult = { title: routeSucursalFindAll.title, route: routeSucursalFindAll.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {
      const result = await this.sucursalService.findAll();

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

  @Get(':id_sucursal')
  async findBy(@Param('id_sucursal') id_sucursal: number): Promise<ApiResult> {
    let apiResult = { title: routeSucursalFindBy.title, route: routeSucursalFindBy.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {
      const result = await this.sucursalService.findByID(id_sucursal);

      if (result.boolean) {
        apiResult.status = 'correct';
        apiResult.code = HttpStatus.OK;
        apiResult.message = result.message;
        apiResult.boolean = true;
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

  @Patch(':id_sucursal')
  async update(@Param('id_sucursal') id_sucursal: number, @Body() updateSucursalDto: UpdateSucursalDto): Promise<ApiResult> {
    let apiResult = { title: routeSucursalUpdate.title, route: routeSucursalUpdate.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {
      const result = await this.sucursalService.update(id_sucursal, updateSucursalDto);

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

  @Delete(':id_sucursal')
  async remove(@Param('id_sucursal') id_sucursal: number): Promise<ApiResult> {
    let apiResult = { title: routeSucursalRemove.title, route: routeSucursalRemove.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {
      const result = await this.sucursalService.remove(id_sucursal);

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