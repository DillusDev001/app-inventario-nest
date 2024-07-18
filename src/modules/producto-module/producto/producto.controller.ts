import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductoService } from './producto.service';
import { ProductoDto } from './dto/producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { ApiTags } from '@nestjs/swagger';
import { ApiResult } from 'src/common/interfaces/api.result';
import { routeProductoCreate, routeProductoFindAll, routeProductoFindBy, routeProductoRemove, routeProductoUpdate } from 'src/common/utils/routes/producto.route';

@ApiTags('producto')
@Controller('producto')
export class ProductoController {

  constructor(private readonly productoService: ProductoService) { }

  @Post()
  async create(@Body() productoDto: ProductoDto): Promise<ApiResult> {
    let apiResult = { title: routeProductoCreate.title, route: routeProductoCreate.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {

    } catch (error) {

    }

    return apiResult;
  }

  @Get()
  async findAll(): Promise<ApiResult> {
    let apiResult = { title: routeProductoFindAll.title, route: routeProductoFindAll.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {

    } catch (error) {

    }

    return apiResult;
  }

  @Get()
  async findBy(): Promise<ApiResult> {
    let apiResult = { title: routeProductoFindBy.title, route: routeProductoFindBy.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {

    } catch (error) {

    }

    return apiResult;
  }

  @Patch()
  async update(@Body() updateProductoDto: UpdateProductoDto): Promise<ApiResult> {
    let apiResult = { title: routeProductoUpdate.title, route: routeProductoUpdate.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {

    } catch (error) {

    }

    return apiResult;
  }

  @Delete()
  async remove(): Promise<ApiResult> {
    let apiResult = { title: routeProductoRemove.title, route: routeProductoRemove.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {

    } catch (error) {

    }

    return apiResult;
  }
  
}