import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus } from '@nestjs/common';
import { TallaService } from './talla.service';
import { TallaDto } from './dto/talla.dto';
import { UpdateTallaDto } from './dto/update-talla.dto';
import { ApiResult } from 'src/common/interfaces/api.result';
import { routeTallaCreate, routeTallaFindAll, routeTallaFindBy, routeTallaRemove, routeTallaUpdate } from 'src/common/utils/routes/mantenimiento-module/talla.route';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('talla')
@Controller('talla')
export class TallaController {
  constructor(private readonly tallaService: TallaService) {}

  @Post()
  async create(@Body() tallaDto: TallaDto): Promise<ApiResult> {
    let apiResult = { title: routeTallaCreate.title, route: routeTallaCreate.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {
      const result = await this.tallaService.create(tallaDto);

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
    let apiResult = { title: routeTallaFindAll.title, route: routeTallaFindAll.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {
      const result = await this.tallaService.findAll();

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

  @Get(':id_talla')
  async findBy(@Param('id_talla') id_talla: number): Promise<ApiResult> {
    let apiResult = { title: routeTallaFindBy.title, route: routeTallaFindBy.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {
      const result = await this.tallaService.findByID(id_talla);

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

  @Patch(':id_talla')
  async update(@Param('id_talla') id_talla: number, @Body() updateTallaDto: UpdateTallaDto): Promise<ApiResult> {
    let apiResult = { title: routeTallaUpdate.title, route: routeTallaUpdate.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {
      const result = await this.tallaService.update(id_talla, updateTallaDto);

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

  @Delete(':id_talla')
  async remove(@Param('id_talla') id_talla: number): Promise<ApiResult> {
    let apiResult = { title: routeTallaRemove.title, route: routeTallaRemove.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {
      const result = await this.tallaService.remove(id_talla);

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
