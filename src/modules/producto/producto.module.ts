import { Module } from '@nestjs/common';
import { ProductoService } from './producto.service';
import { ProductoController } from './producto.controller';
import { Producto } from './entities/producto.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthService } from 'src/common/services/auth.service';

@Module({
  imports: [TypeOrmModule.forFeature([Producto])],
  controllers: [ProductoController],
  providers: [ProductoService, AuthService],
})
export class ProductoModule {}
