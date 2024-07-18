import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VentaDetalleService } from './venta-detalle.service';
import { VentaDetalleDto } from './dto/venta-detalle.dto';
import { UpdateVentaDetalleDto } from './dto/update-venta-detalle.dto';
import { ApiTags } from '@nestjs/swagger';
import { ApiResult } from 'src/common/interfaces/api.result';
import { routeVentaDetalleCreate, routeVentaDetalleFindAll, routeVentaDetalleFindBy, routeVentaDetalleRemove, routeVentaDetalleUpdate } from 'src/common/utils/routes/ventadetalle.route';

@ApiTags('venta-detalle')
@Controller('venta-detalle')
export class VentaDetalleController {

  constructor(private readonly ventaDetalleService: VentaDetalleService) { }

  @Post()
  async create(@Body() ventaDetalleDto: VentaDetalleDto): Promise<ApiResult> {
    let apiResult = { title: routeVentaDetalleCreate.title, route: routeVentaDetalleCreate.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {

    } catch (error) {

    }

    return apiResult;
  }

  @Get()
  async findAll(): Promise<ApiResult> {
    let apiResult = { title: routeVentaDetalleFindAll.title, route: routeVentaDetalleFindAll.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {

    } catch (error) {

    }

    return apiResult;
  }

  @Get()
  async findBy(): Promise<ApiResult> {
    let apiResult = { title: routeVentaDetalleFindBy.title, route: routeVentaDetalleFindBy.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {

    } catch (error) {

    }

    return apiResult;
  }

  @Patch()
  async update(@Body() updateVentaDetalleDto: UpdateVentaDetalleDto): Promise<ApiResult> {
    let apiResult = { title: routeVentaDetalleUpdate.title, route: routeVentaDetalleUpdate.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {

    } catch (error) {

    }

    return apiResult;
  }

  @Delete()
  async remove(): Promise<ApiResult> {
    let apiResult = { title: routeVentaDetalleRemove.title, route: routeVentaDetalleRemove.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {

    } catch (error) {

    }

    return apiResult;
  }

}