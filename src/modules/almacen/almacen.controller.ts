import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
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

    } catch (error) {

    }

    return apiResult;
  }

  @Get()
  async findAll(): Promise<ApiResult> {
    let apiResult = { title: routeAlmacenFindAll.title, route: routeAlmacenFindAll.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {

    } catch (error) {

    }

    return apiResult;
  }

  @Get()
  async findBy(): Promise<ApiResult> {
    let apiResult = { title: routeAlmacenFindBy.title, route: routeAlmacenFindBy.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {

    } catch (error) {

    }

    return apiResult;
  }

  @Patch()
  async update(@Body() updateAlmacenDto: UpdateAlmacenDto): Promise<ApiResult> {
    let apiResult = { title: routeAlmacenUpdate.title, route: routeAlmacenUpdate.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {

    } catch (error) {

    }

    return apiResult;
  }

  @Delete()
  async remove(): Promise<ApiResult> {
    let apiResult = { title: routeAlmacenRemove.title, route: routeAlmacenRemove.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {

    } catch (error) {

    }

    return apiResult;
  }

}