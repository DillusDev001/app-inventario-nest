import { Module } from '@nestjs/common';
import { SucursalService } from './sucursal.service';
import { SucursalController } from './sucursal.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sucursal } from './entities/sucursal.entity';
import { AuthService } from 'src/common/services/auth.service';
import { UsuarioService } from 'src/modules/usuario/usuario.service';
import { Usuario } from 'src/modules/usuario/entities/usuario.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Sucursal]), TypeOrmModule.forFeature([Usuario])],
  controllers: [SucursalController],
  providers: [SucursalService, UsuarioService, AuthService],
})
export class SucursalModule { }
