import { Injectable } from '@nestjs/common';
import { UsuarioDto } from './dto/usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { ServiceResult } from 'src/common/interfaces/service.result';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';
import { Repository } from 'typeorm';
import { AuthService } from 'src/common/services/auth.service';

@Injectable()
export class UsuarioService {

  constructor(
    @InjectRepository(Usuario) private usuarioRepository: Repository<Usuario>,
    private readonly authService: AuthService
  ) { }

  async create(usuarioDto: UsuarioDto): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

    const result = await this.findByUsuario(usuarioDto.usuario);

    if (!result.boolean) {
      usuarioDto.password = await this.authService.hashPassword(usuarioDto.password);
      usuarioDto.pregunta = await this.authService.hashPassword(usuarioDto.pregunta);
      usuarioDto.respuesta = await this.authService.hashPassword(usuarioDto.respuesta);

      const newObj = this.usuarioRepository.create(usuarioDto);
      await this.usuarioRepository.save(newObj);

      serviceResult.boolean = true;
      serviceResult.message = 'Usuario se ha agregado correctamente.';
      serviceResult.number = 1;
      serviceResult.object = newObj;
    } else {
      serviceResult.boolean = false;
      serviceResult.message = 'El usuario ya se encuentra registrado.';
    }

    return serviceResult;
  }

  async findAll(): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

    const result = await this.usuarioRepository.find();
    const count = result.length;

    serviceResult.boolean = count > 0 ? true : false;
    serviceResult.message = count + ' usuario(s) encontrado(s).';
    serviceResult.number = count;
    serviceResult.data = result;

    return serviceResult;
  }

  async findByUsuario(usuario: string): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

    const result = await this.usuarioRepository.findBy({ usuario });
    const count = result.length;

    serviceResult.boolean = count > 0 ? true : false;
    serviceResult.message = count + ' usuario encontrado.';
    serviceResult.number = count;
    serviceResult.data = result;

    return serviceResult;
  }

  async findAtribute(attribute: string, value: string): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

    const result = await this.usuarioRepository
      .createQueryBuilder()
      .where(attribute + " like :value", { value: '%' + value + '%' })
      .getMany()

    const count = result.length;

    serviceResult.boolean = count > 0 ? true : false;
    serviceResult.message = count + ' usuario(s) encontrado(s).';
    serviceResult.number = count;
    serviceResult.data = result;

    return serviceResult;
  }

  async loginAuth(usuario: string, password: string): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

    const result = await this.usuarioRepository.findOne({ where: { usuario } });


    if (result) {
      const compare = await this.authService.comparePasswords(password, result.password);

      if (compare) {
        const userName = result.nombres + ' ' + result.apellidos
        serviceResult.boolean = true;
        serviceResult.message = result.sexo == 'M' ? userName + ' bienvenido al sistema.' : userName + ' bienvenida al sistema.';
        serviceResult.number = 1;
        serviceResult.object = result;
      } else {
        serviceResult.boolean = false;
        serviceResult.message = 'Usuario y/o contraseña son incorrectos.';
      }
    } else {
      serviceResult.boolean = false;
      serviceResult.message = 'Usuario y/o contraseña son incorrectos.';
    }

    return serviceResult;
  }

  async update(usuario: string, updateUsuarioDto: UpdateUsuarioDto): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

    const updateObj = await this.usuarioRepository.update(usuario, updateUsuarioDto);

    serviceResult.boolean = updateObj.affected === 1 ? true : false;
    serviceResult.message = updateObj.affected === 1 ? 'Se ha actualizado correctamente.' : 'No se ha modificado.';
    serviceResult.number = updateObj.affected;

    return serviceResult;
  }

  async forgot(usuario: string, updateUsuarioDto: UpdateUsuarioDto): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

    const userL = await this.usuarioRepository.findBy({ usuario });

    if (userL.length === 1) {
      const user = userL[0];

      const comparePregunta = await this.authService.comparePasswords(updateUsuarioDto.pregunta, user.pregunta);
      const compareRespuesta = await this.authService.comparePasswords(updateUsuarioDto.respuesta, user.respuesta);

      if (comparePregunta && compareRespuesta) {
        updateUsuarioDto.password = await this.authService.hashPassword(updateUsuarioDto.password);

        const updateObj = await this.usuarioRepository.update(usuario, { password: updateUsuarioDto.password });

        serviceResult.boolean = updateObj.affected === 1 ? true : false;
        serviceResult.message = updateObj.affected === 1 ? 'Se ha actualizado correctamente.' : 'No se ha modificado.';
        serviceResult.number = updateObj.affected;
      } else {
        serviceResult.boolean = false;
        serviceResult.message = 'Pregunta y/o Respuesta son incorrectos.';
        return serviceResult;
      }
    } else {
      serviceResult.boolean = false;
      serviceResult.message = 'No se ha encontrado al usuario: ' + usuario;
      return serviceResult;
    }

    return serviceResult;
  }

  async remove(usuario: string): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

    const removeObj = await this.usuarioRepository.delete(usuario);

    serviceResult.boolean = removeObj.affected === 1 ? true : false;
    serviceResult.message = removeObj.affected === 1 ? 'Se ha eliminado correctamente.' : 'No se ha encontrado al usuario: ' + usuario;
    serviceResult.number = removeObj.affected;
    serviceResult.object = removeObj.affected === 1 ? removeObj : null;

    return serviceResult;
  }

}