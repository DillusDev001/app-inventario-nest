import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UsuarioDto } from './dto/usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { ApiTags } from '@nestjs/swagger';
import { ApiResult } from 'src/common/interfaces/api.result';
import { routeUsuarioAttribute, routeUsuarioCreate, routeUsuarioFindAll, routeUsuarioFindBy, routeUsuarioLogin, routeUsuarioRemove, routeUsuarioUpdate } from 'src/common/utils/routes/usuario.route';
import { AuthService } from 'src/common/services/auth.service';

@ApiTags('usuario')
@Controller('usuario')
export class UsuarioController {

  constructor(private readonly usuarioService: UsuarioService) { }

  @Post()
  async create(@Body() usuarioDto: UsuarioDto): Promise<ApiResult> {
    let apiResult = { title: routeUsuarioCreate.title, route: routeUsuarioCreate.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {
      const result = await this.usuarioService.create(usuarioDto);

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
    let apiResult = { title: routeUsuarioFindAll.title, route: routeUsuarioFindAll.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {
      const result = await this.usuarioService.findAll();

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

  @Get(':usuario')
  async findByUsuario(@Param('usuario') usuario: string): Promise<ApiResult> {
    let apiResult = { title: routeUsuarioFindBy.title, route: routeUsuarioFindBy.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {
      const result = await this.usuarioService.findByUsuario(usuario);

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

  @Get('busqueda/:attribute/:value')
  async findAtribute(@Param('attribute') attribute: string, @Param('value') value: string): Promise<ApiResult> {
    let apiResult = { title: routeUsuarioAttribute.title, route: routeUsuarioAttribute.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {
      const result = await this.usuarioService.findAtribute(attribute, value);

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

  @Get(':usuario/:password')
  async loginAuth(@Param('usuario') usuario: string, @Param('password') password: string): Promise<ApiResult> {
    let apiResult = { title: routeUsuarioLogin.title, route: routeUsuarioLogin.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {
      const result = await this.usuarioService.loginAuth(usuario, password);

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

  @Patch(':usuario')
  async update(@Param('usuario') usuario: string, @Body() updateUsuarioDto: UpdateUsuarioDto): Promise<ApiResult> {
    let apiResult = { title: routeUsuarioUpdate.title, route: routeUsuarioUpdate.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {
      const result = await this.usuarioService.update(usuario, updateUsuarioDto);

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

  @Patch('forgot/:usuario')
  async forgot(@Param('usuario') usuario: string, @Body() updateUsuarioDto: UpdateUsuarioDto): Promise<ApiResult> {
    let apiResult = { title: routeUsuarioUpdate.title, route: routeUsuarioUpdate.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {
      const result = await this.usuarioService.forgot(usuario, updateUsuarioDto);

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

  @Delete(':usuario')
  async remove(@Param('usuario') usuario: string): Promise<ApiResult> {
    let apiResult = { title: routeUsuarioRemove.title, route: routeUsuarioRemove.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {
      const result = await this.usuarioService.remove(usuario);

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