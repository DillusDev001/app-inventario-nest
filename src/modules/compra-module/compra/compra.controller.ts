import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CompraService } from './compra.service';
import { CompraDto } from './dto/compra.dto';
import { UpdateCompraDto } from './dto/update-compra.dto';
import { ApiTags } from '@nestjs/swagger';
import { ApiResult } from 'src/common/interfaces/api.result';
import { routeCompraCreate, routeCompraFindAll, routeCompraFindBy, routeCompraRemove, routeCompraUpdate } from 'src/common/utils/routes/compra-module/compra.route';

@ApiTags('compra')
@Controller('compra')
export class CompraController {
  
  constructor(private readonly compraService: CompraService) { }

  @Post()
  async create(@Body() compraDto: CompraDto): Promise<ApiResult> {
    let apiResult = { title: routeCompraCreate.title, route: routeCompraCreate.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {

    } catch (error) {

    }

    return apiResult;
  }

  @Get()
  async findAll(): Promise<ApiResult> {
    let apiResult = { title: routeCompraFindAll.title, route: routeCompraFindAll.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {

    } catch (error) {

    }

    return apiResult;
  }

  @Get()
  async findBy(): Promise<ApiResult> {
    let apiResult = { title: routeCompraFindBy.title, route: routeCompraFindBy.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {

    } catch (error) {

    }

    return apiResult;
  }

  @Patch()
  async update(@Body() updateCompraDto: UpdateCompraDto): Promise<ApiResult> {
    let apiResult = { title: routeCompraUpdate.title, route: routeCompraUpdate.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {

    } catch (error) {

    }

    return apiResult;
  }

  @Delete()
  async remove(): Promise<ApiResult> {
    let apiResult = { title: routeCompraRemove.title, route: routeCompraRemove.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {

    } catch (error) {

    }

    return apiResult;
  }

}