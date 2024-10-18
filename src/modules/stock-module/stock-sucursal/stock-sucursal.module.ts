import { Module } from '@nestjs/common';
import { StockSucursalService } from './stock-sucursal.service';
import { StockSucursalController } from './stock-sucursal.controller';
import { StockSucursal } from './entities/stock-sucursal.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AlmacenService } from 'src/modules/almacen-module/almacen/almacen.service';
import { AuthService } from 'src/common/services/auth.service';
import { ProductoService } from 'src/modules/producto/producto.service';
import { Almacen } from 'src/modules/almacen-module/almacen/entities/almacen.entity';
import { Producto } from 'src/modules/producto/entities/producto.entity';
import { UsuarioService } from 'src/modules/usuario/usuario.service';
import { Usuario } from 'src/modules/usuario/entities/usuario.entity';
import { StockGeneralService } from '../stock-general/stock-general.service';
import { StockGeneral } from '../stock-general/entities/stock-general.entity';
import { Sucursal } from 'src/modules/almacen-module/sucursal/entities/sucursal.entity';
import { SucursalService } from 'src/modules/almacen-module/sucursal/sucursal.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([StockSucursal]), TypeOrmModule.forFeature([Sucursal]), TypeOrmModule.forFeature([StockGeneral]),
    TypeOrmModule.forFeature([Almacen]), TypeOrmModule.forFeature([Producto]),
    TypeOrmModule.forFeature([Usuario])
  ],
  controllers: [StockSucursalController],
  providers: [
    StockSucursalService, SucursalService, StockGeneralService,
    AlmacenService, ProductoService,
    UsuarioService, AuthService
  ],
})
export class StockSucursalModule { }
