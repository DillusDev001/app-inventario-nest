import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './modules/usuario/usuario.module';
import { ProductoModule } from './modules/producto-module/producto/producto.module';
import { SucursalModule } from './modules/sucursal/sucursal.module';
import { AlmacenModule } from './modules/almacen/almacen.module';
import { StockGeneralModule } from './modules/stock-module/stock-general/stock-general.module';
import { StockSucursalModule } from './modules/stock-module/stock-sucursal/stock-sucursal.module';
import { CompraModule } from './modules/compra-module/compra/compra.module';
import { CompraDetalleModule } from './modules/compra-module/compra-detalle/compra-detalle.module';
import { VentaModule } from './modules/venta-module/venta/venta.module';
import { VentaDetalleModule } from './modules/venta-module/venta-detalle/venta-detalle.module';
import { VentaPagoModule } from './modules/venta-module/venta-pago/venta-pago.module';
import { join } from 'path';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthService } from './common/services/auth.service';
import { ProductoColorModule } from './modules/producto-module/producto-color/producto-color.module';
import { ProductoTallaModule } from './modules/producto-module/producto-talla/producto-talla.module';

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
    ProductoModule, ProductoColorModule, ProductoTallaModule,
    SucursalModule, AlmacenModule,
    StockGeneralModule, StockSucursalModule,
    CompraModule, CompraDetalleModule,
    VentaModule, VentaDetalleModule, VentaPagoModule,
  ],
  controllers: [AppController],
  providers: [AppService, AuthService],
})
export class AppModule { }