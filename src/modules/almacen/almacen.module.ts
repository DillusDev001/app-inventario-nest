import { Module } from '@nestjs/common';
import { AlmacenService } from './almacen.service';
import { AlmacenController } from './almacen.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Almacen } from './entities/almacen.entity';
import { Usuario } from '../usuario/entities/usuario.entity';
import { UsuarioService } from '../usuario/usuario.service';
import { AuthService } from 'src/common/services/auth.service';

@Module({
  imports: [TypeOrmModule.forFeature([Almacen]), TypeOrmModule.forFeature([Usuario])],
  controllers: [AlmacenController],
  providers: [AlmacenService, UsuarioService, AuthService],
})
export class AlmacenModule { }
