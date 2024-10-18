import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CompraDetalleService } from './compra-detalle.service';
import { CompraDetalleDto } from './dto/compra-detalle.dto';
import { UpdateCompraDetalleDto } from './dto/update-compra-detalle.dto';
import { ApiTags } from '@nestjs/swagger';
import { ApiResult } from 'src/common/interfaces/api.result';
import { routeCompraDetalleCreate, routeCompraDetalleFindAll, routeCompraDetalleFindBy, routeCompraDetalleRemove, routeCompraDetalleUpdate } from 'src/common/utils/routes/compra-module/compradetalla.route';

@ApiTags('compra-detalle')
@Controller('compra-detalle')
export class CompraDetalleController {
  
  constructor(private readonly compraDetalleService: CompraDetalleService) {}

  @Post()
  async create(@Body() compraDetalleDto: CompraDetalleDto): Promise<ApiResult> {
    let apiResult = { title: routeCompraDetalleCreate.title, route: routeCompraDetalleCreate.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {

    } catch (error) {

    }

    return apiResult;
  }

  @Get()
  async findAll(): Promise<ApiResult> {
    let apiResult = { title: routeCompraDetalleFindAll.title, route: routeCompraDetalleFindAll.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {

    } catch (error) {

    }

    return apiResult;
  }

  @Get()
  async findBy(): Promise<ApiResult> {
    let apiResult = { title: routeCompraDetalleFindBy.title, route: routeCompraDetalleFindBy.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {

    } catch (error) {

    }

    return apiResult;
  }

  @Patch()
  async update(@Body() updateCompraDetalleDto: UpdateCompraDetalleDto): Promise<ApiResult> {
    let apiResult = { title: routeCompraDetalleUpdate.title, route: routeCompraDetalleUpdate.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {

    } catch (error) {

    }

    return apiResult;
  }

  @Delete()
  async remove(): Promise<ApiResult> {
    let apiResult = { title: routeCompraDetalleRemove.title, route: routeCompraDetalleRemove.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {

    } catch (error) {

    }

    return apiResult;
  }

}