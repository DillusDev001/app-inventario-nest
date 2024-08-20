import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus } from '@nestjs/common';
import { ColorService } from './color.service';
import { ColorDto } from './dto/color.dto';
import { UpdateColorDto } from './dto/update-color.dto';
import { ApiResult } from 'src/common/interfaces/api.result';
import { routeColorCreate, routeColorFindAll, routeColorFindBy, routeColorRemove, routeColorUpdate } from 'src/common/utils/routes/color.route';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('color')
@Controller('color')
export class ColorController {

  constructor(private readonly colorService: ColorService) { }

  @Post()
  async create(@Body() colorDto: ColorDto): Promise<ApiResult> {
    let apiResult = { title: routeColorCreate.title, route: routeColorCreate.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {
      const result = await this.colorService.create(colorDto);

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
    let apiResult = { title: routeColorFindAll.title, route: routeColorFindAll.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {
      const result = await this.colorService.findAll();

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

  @Get(':id_color')
  async findBy(@Param('id_color') id_color: number): Promise<ApiResult> {
    let apiResult = { title: routeColorFindBy.title, route: routeColorFindBy.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {
      const result = await this.colorService.findByID(id_color);

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

  @Patch(':id_color')
  async update(@Param('id_color') id_color: number, @Body() updateColorDto: UpdateColorDto): Promise<ApiResult> {
    let apiResult = { title: routeColorUpdate.title, route: routeColorUpdate.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {
      const result = await this.colorService.update(id_color, updateColorDto);

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

  @Delete(':id_color')
  async remove(@Param('id_color') id_color: number): Promise<ApiResult> {
    let apiResult = { title: routeColorRemove.title, route: routeColorRemove.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {
      const result = await this.colorService.remove(id_color);

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
