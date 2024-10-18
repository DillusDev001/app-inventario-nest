import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './modules/usuario/usuario.module';
import { ProductoModule } from './modules/producto/producto.module';
import { AlmacenModule } from './modules/almacen-module/almacen/almacen.module';
import { StockGeneralModule } from './modules/stock-module/stock-general/stock-general.module';
import { StockSucursalModule } from './modules/stock-module/stock-sucursal/stock-sucursal.module';
import { CompraModule } from './modules/compra-module/compra/compra.module';
import { CompraDetalleModule } from './modules/compra-module/compra-detalle/compra-detalle.module';
import { join } from 'path';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthService } from './common/services/auth.service';
import { ColorModule } from './modules/mantenimiento-module/color/color.module';
import { TallaModule } from './modules/mantenimiento-module/talla/talla.module';
import { MaterialModule } from './modules/mantenimiento-module/material/material.module';
import { CategoriaModule } from './modules/mantenimiento-module/categoria/categoria.module';
import { ClienteModule } from './modules/cliente-module/cliente/cliente.module';
import { ClienteCuentaHistorialModule } from './modules/cliente-module/cliente-cuenta-historial/cliente-cuenta-historial.module';
import { ClienteCuentaModule } from './modules/cliente-module/cliente-cuenta/cliente-cuenta.module';
import { OperacionModule } from './modules/operacion-module/operacion/operacion.module';
import { OperacionDetalleModule } from './modules/operacion-module/operacion-detalle/operacion-detalle.module';
import { OperacionPagoModule } from './modules/operacion-module/operacion-pago/operacion-pago.module';
import { OperacionSaldoModule } from './modules/operacion-module/operacion-saldo/operacion-saldo.module';
import { OperacionSaldoHistorialModule } from './modules/operacion-module/operacion-saldo-historial/operacion-saldo-historial.module';
import { SucursalModule } from './modules/almacen-module/sucursal/sucursal.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRoot({ rootPath: join(__dirname, '..', 'public') }), // para evitar el error en http://localhost:3000
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,

      autoLoadEntities: true,
      dropSchema: false,
      synchronize: false
    }),

    UsuarioModule,

    ProductoModule,

    SucursalModule, AlmacenModule,

    StockGeneralModule, StockSucursalModule,

    CompraModule, CompraDetalleModule,

    ClienteModule, ClienteCuentaModule, ClienteCuentaHistorialModule,

    ColorModule, TallaModule, MaterialModule, CategoriaModule, 
    
    OperacionModule, OperacionDetalleModule, OperacionPagoModule, OperacionSaldoModule, OperacionSaldoHistorialModule, 
    
  ],
  controllers: [AppController],
  providers: [AppService, AuthService],
})
export class AppModule { }