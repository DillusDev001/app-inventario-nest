import { Module } from '@nestjs/common';
import { ClienteCuentaController } from './cliente-cuenta.controller';
import { ClienteCuentaService } from './cliente-cuenta.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClienteCuenta } from './entities/cliente-cuenta.entity';

@Module({
  controllers: [ClienteCuentaController],
  providers: [ClienteCuentaService],
  imports: [TypeOrmModule.forFeature([ClienteCuenta])],

})
export class ClienteCuentaModule {}
