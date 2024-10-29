import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus } from '@nestjs/common';
import { ProductoService } from './producto.service';
import { ProductoDto } from './dto/producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { ApiTags } from '@nestjs/swagger';
import { ApiResult } from 'src/common/interfaces/api.result';
import { routeProductoAttribute, routeProductoCreate, routeProductoCreateMultiple, routeProductoFindAll, routeProductoFindBy, routeProductoNotIntockGeneral, routeProductoRemove, routeProductoUpdate } from 'src/common/utils/routes/producto/producto.route';

@ApiTags('producto')
@Controller('producto')
export class ProductoController {

  constructor(private readonly productoService: ProductoService) { }

  @Post('/multiple')
  async createMultiple(@Body() array: ProductoDto[]): Promise<ApiResult> {
    let apiResult = { title: routeProductoCreateMultiple.title, route: routeProductoCreateMultiple.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {
      const result = await this.productoService.createMultiple(array);

      if (result.boolean) {
        apiResult.status = 'correct';
        apiResult.code = HttpStatus.OK;
        apiResult.message = result.message;
        apiResult.boolean = true;
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

  @Post()
  async create(@Body() productoDto: ProductoDto): Promise<ApiResult> {
    let apiResult = { title: routeProductoCreate.title, route: routeProductoCreate.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {
      const result = await this.productoService.create(productoDto);

      if (result.boolean) {
        apiResult.status = 'correct';
        apiResult.code = HttpStatus.OK;
        apiResult.message = result.message;
        apiResult.boolean = true;
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
    let apiResult = { title: routeProductoFindAll.title, route: routeProductoFindAll.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {
      const result = await this.productoService.findAll();

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

  @Get(':cod_producto')
  async findBy(@Param('cod_producto') cod_producto: string): Promise<ApiResult> {
    let apiResult = { title: routeProductoFindBy.title, route: routeProductoFindBy.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {
      const result = await this.productoService.findByID(cod_producto);

      if (result.boolean) {
        apiResult.status = 'correct';
        apiResult.code = HttpStatus.OK;
        apiResult.message = result.message;
        apiResult.boolean = true;
        apiResult.data = [result.object];
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
    let apiResult = { title: routeProductoAttribute.title, route: routeProductoAttribute.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {
      const result = await this.productoService.findAtribute(attribute, value);

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

  @Get('not/stock/')
  async findNotStockGeneral(): Promise<ApiResult> {
    let apiResult = { title: routeProductoNotIntockGeneral.title, route: routeProductoNotIntockGeneral.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {
      const result = await this.productoService.findNotStockGeneral();

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

  @Patch(':cod_producto')
  async update(@Param('cod_producto') cod_producto: string, @Body() updateProductoDto: UpdateProductoDto): Promise<ApiResult> {
    let apiResult = { title: routeProductoUpdate.title, route: routeProductoUpdate.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {
      const result = await this.productoService.update(cod_producto, updateProductoDto);

      if (result.boolean) {
        apiResult.status = 'correct';
        apiResult.code = HttpStatus.OK;
        apiResult.message = result.message;
        apiResult.boolean = true;
        apiResult.rows = result.number;
        apiResult.data = [result.object];
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

  @Delete(':cod_producto')
  async remove(@Param('cod_producto') cod_producto: string): Promise<ApiResult> {
    let apiResult = { title: routeProductoRemove.title, route: routeProductoRemove.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {
      const result = await this.productoService.remove(cod_producto);

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