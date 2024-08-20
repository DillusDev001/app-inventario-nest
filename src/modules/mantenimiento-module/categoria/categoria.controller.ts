import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus } from '@nestjs/common';
import { CategoriaService } from './categoria.service';
import { CategoriaDto } from './dto/categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';
import { ApiTags } from '@nestjs/swagger';
import { ApiResult } from 'src/common/interfaces/api.result';
import { routeCategoriaCreate, routeCategoriaFindAll, routeCategoriaFindBy, routeCategoriaRemove, routeCategoriaUpdate } from 'src/common/utils/routes/categoria.route';

@ApiTags('categoria')
@Controller('categoria')
export class CategoriaController {
  
  constructor(private readonly categoriaService: CategoriaService) {}

  @Post()
  async create(@Body() categoriaDto: CategoriaDto): Promise<ApiResult> {
    let apiResult = { title: routeCategoriaCreate.title, route: routeCategoriaCreate.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {
      const result = await this.categoriaService.create(categoriaDto);

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
    let apiResult = { title: routeCategoriaFindAll.title, route: routeCategoriaFindAll.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {
      const result = await this.categoriaService.findAll();

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

  @Get(':id_categoria')
  async findBy(@Param('id_categoria') id_categoria: number): Promise<ApiResult> {
    let apiResult = { title: routeCategoriaFindBy.title, route: routeCategoriaFindBy.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {
      const result = await this.categoriaService.findByID(id_categoria);

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

  @Patch(':id_categoria')
  async update(@Param('id_categoria') id_categoria: number, @Body() updateCategoriaDto: UpdateCategoriaDto): Promise<ApiResult> {
    let apiResult = { title: routeCategoriaUpdate.title, route: routeCategoriaUpdate.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {
      const result = await this.categoriaService.update(id_categoria, updateCategoriaDto);

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

  @Delete(':id_categoria')
  async remove(@Param('id_categoria') id_categoria: number): Promise<ApiResult> {
    let apiResult = { title: routeCategoriaRemove.title, route: routeCategoriaRemove.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {
      const result = await this.categoriaService.remove(id_categoria);

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
