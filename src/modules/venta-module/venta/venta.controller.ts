import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VentaService } from './venta.service';
import { VentaDto } from './dto/venta.dto';
import { UpdateVentaDto } from './dto/update-venta.dto';
import { ApiTags } from '@nestjs/swagger';
import { ApiResult } from 'src/common/interfaces/api.result';
import { routeVentaCreate, routeVentaFindAll, routeVentaFindBy, routeVentaRemove, routeVentaUpdate } from 'src/common/utils/routes/venta.route';

@ApiTags('venta')
@Controller('venta')
export class VentaController {
  constructor(private readonly ventaService: VentaService) {}

  @Post()
  async create(@Body() ventaDto: VentaDto): Promise<ApiResult> {
    let apiResult = { title: routeVentaCreate.title, route: routeVentaCreate.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {

    } catch (error) {

    }

    return apiResult;
  }

  @Get()
  async findAll(): Promise<ApiResult> {
    let apiResult = { title: routeVentaFindAll.title, route: routeVentaFindAll.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {

    } catch (error) {

    }

    return apiResult;
  }

  @Get()
  async findBy(): Promise<ApiResult> {
    let apiResult = { title: routeVentaFindBy.title, route: routeVentaFindBy.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {

    } catch (error) {

    }

    return apiResult;
  }

  @Patch()
  async update(@Body() updateVentaDto: UpdateVentaDto): Promise<ApiResult> {
    let apiResult = { title: routeVentaUpdate.title, route: routeVentaUpdate.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {

    } catch (error) {

    }

    return apiResult;
  }

  @Delete()
  async remove(): Promise<ApiResult> {
    let apiResult = { title: routeVentaRemove.title, route: routeVentaRemove.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {

    } catch (error) {

    }

    return apiResult;
  }
  
}