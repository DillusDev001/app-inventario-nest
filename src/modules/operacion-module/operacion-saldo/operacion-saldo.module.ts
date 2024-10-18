import { Module } from '@nestjs/common';
import { OperacionSaldoService } from './operacion-saldo.service';
import { OperacionSaldoController } from './operacion-saldo.controller';
import { OperacionSaldo } from './entities/operacion-saldo.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([OperacionSaldo])],
  controllers: [OperacionSaldoController],
  providers: [OperacionSaldoService],
})
export class OperacionSaldoModule {}
