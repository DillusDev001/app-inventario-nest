import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus } from '@nestjs/common';
import { AlmacenService } from './almacen.service';
import { AlmacenDto } from './dto/almacen.dto';
import { UpdateAlmacenDto } from './dto/update-almacen.dto';
import { ApiTags } from '@nestjs/swagger';
import { ApiResult } from 'src/common/interfaces/api.result';
import { routeAlmacenCreate, routeAlmacenFindAll, routeAlmacenFindBy, routeAlmacenRemove, routeAlmacenUpdate } from 'src/common/utils/routes/almacen.route';

@ApiTags('almacen')
@Controller('almacen')
export class AlmacenController {

  constructor(private readonly almacenService: AlmacenService) { }

  @Post()
  async create(@Body() almacenDto: AlmacenDto): Promise<ApiResult> {
    let apiResult = { title: routeAlmacenCreate.title, route: routeAlmacenCreate.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {
      const result = await this.almacenService.create(almacenDto);

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

  @Get(':id_sucursal')
  async findAll(@Param('id_sucursal') id_sucursal: number): Promise<ApiResult> {
    let apiResult = { title: routeAlmacenFindAll.title, route: routeAlmacenFindAll.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {
      const result = await this.almacenService.findAll(id_sucursal);

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

  @Get('id_almacen/:id_almacen')
  async findBy(@Param('id_almacen') id_almacen: number): Promise<ApiResult> {
    let apiResult = { title: routeAlmacenFindBy.title, route: routeAlmacenFindBy.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {
      const result = await this.almacenService.findByID(id_almacen);

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

  @Patch(':id_almacen')
  async update(@Param('id_almacen') id_almacen: number, @Body() updateAlmacenDt: UpdateAlmacenDto): Promise<ApiResult> {
    let apiResult = { title: routeAlmacenUpdate.title, route: routeAlmacenUpdate.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {
      const result = await this.almacenService.update(id_almacen, updateAlmacenDt);

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

  @Delete(':id_almacen')
  async remove(@Param('id_almacen') id_almacen: number): Promise<ApiResult> {
    let apiResult = { title: routeAlmacenRemove.title, route: routeAlmacenRemove.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {
      const result = await this.almacenService.remove(id_almacen);

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