import { Module } from '@nestjs/common';
import { OperacionService } from './operacion.service';
import { OperacionController } from './operacion.controller';
import { Operacion } from './entities/operacion.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Operacion])],
  controllers: [OperacionController],
  providers: [OperacionService],
})
export class OperacionModule { }
