import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VentaPagoService } from './venta-pago.service';
import { VentaPagoDto } from './dto/venta-pago.dto';
import { UpdateVentaPagoDto } from './dto/update-venta-pago.dto';
import { ApiTags } from '@nestjs/swagger';
import { ApiResult } from 'src/common/interfaces/api.result';
import { routeVentaPagoCreate, routeVentaPagoFindAll, routeVentaPagoFindBy, routeVentaPagoRemove, routeVentaPagoUpdate } from 'src/common/utils/routes/ventapago.route';

@ApiTags('venta-pago')
@Controller('venta-pago')
export class VentaPagoController {

  constructor(private readonly ventaPagoService: VentaPagoService) { }

  @Post()
  async create(@Body() ventaPagoDto: VentaPagoDto): Promise<ApiResult> {
    let apiResult = { title: routeVentaPagoCreate.title, route: routeVentaPagoCreate.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {

    } catch (error) {

    }

    return apiResult;
  }

  @Get()
  async findAll(): Promise<ApiResult> {
    let apiResult = { title: routeVentaPagoFindAll.title, route: routeVentaPagoFindAll.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {

    } catch (error) {

    }

    return apiResult;
  }

  @Get()
  async findBy(): Promise<ApiResult> {
    let apiResult = { title: routeVentaPagoFindBy.title, route: routeVentaPagoFindBy.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {

    } catch (error) {

    }

    return apiResult;
  }

  @Patch()
  async update(@Body() updateVentaPagoDto: UpdateVentaPagoDto): Promise<ApiResult> {
    let apiResult = { title: routeVentaPagoUpdate.title, route: routeVentaPagoUpdate.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {

    } catch (error) {

    }

    return apiResult;
  }

  @Delete()
  async remove(): Promise<ApiResult> {
    let apiResult = { title: routeVentaPagoRemove.title, route: routeVentaPagoRemove.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {

    } catch (error) {

    }

    return apiResult;
  }

}