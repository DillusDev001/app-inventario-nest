import { Module } from '@nestjs/common';
import { ClienteCuentaHistorialService } from './cliente-cuenta-historial.service';
import { ClienteCuentaHistorialController } from './cliente-cuenta-historial.controller';
import { ClienteCuentaHistorial } from './entities/cliente-cuenta-historial.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ClienteCuentaHistorial])],
  controllers: [ClienteCuentaHistorialController],
  providers: [ClienteCuentaHistorialService],
})
export class ClienteCuentaHistorialModule {}
