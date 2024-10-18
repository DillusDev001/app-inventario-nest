import { Injectable } from '@nestjs/common';
import { OperacionPagoDto } from './dto/operacion-pago.dto';
import { UpdateOperacionPagoDto } from './dto/update-operacion-pago.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { OperacionPago } from './entities/operacion-pago.entity';
import { Repository } from 'typeorm';
import { ServiceResult } from 'src/common/interfaces/service.result';

@Injectable()
export class OperacionPagoService {
 
    constructor(@InjectRepository(OperacionPago) private operacionPagoRepository: Repository<OperacionPago>) { }

    async addMultiple(array: OperacionPagoDto[]): Promise<ServiceResult> {
        let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

        const multiple = await this.operacionPagoRepository
            .createQueryBuilder()
            .insert()
            .into(OperacionPago)
            .values(array)
            .execute();

        const rows = multiple.raw.affectedRows;

        serviceResult.boolean = rows > 0 ? true : false;
        serviceResult.message = rows > 0 ? rows + ' detalle(s) pagos agregado(s).' : 'No se han agregado detalles de pago.';
        serviceResult.number = rows;

        return serviceResult;
    }

    async create(cod_operacion: string, array: OperacionPagoDto[]): Promise<ServiceResult> {
        let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

        const resultCountDetalle = await this.findAll(cod_operacion);

        if (resultCountDetalle.number > 0) {
            const remove = await this.remove(cod_operacion);
            if (remove.number > 0) {
                const resultAdd = await this.addMultiple(array);

                if (resultAdd.boolean) {
                    serviceResult.boolean = true;
                    serviceResult.message = resultAdd.message;
                    serviceResult.number = resultAdd.number;
                } else {
                    serviceResult.message = resultAdd.message;
                }
            } else {
                serviceResult.message = 'No se han eliminado detalles.';
            }
        } else {
            const resultAdd = await this.addMultiple(array);

            if (resultAdd.boolean) {
                serviceResult.boolean = true;
                serviceResult.message = resultAdd.message;
                serviceResult.number = resultAdd.number;
            } else {
                serviceResult.message = resultAdd.message;
            }
        }

        return serviceResult;
    }

    async findAll(cod_operacion: string): Promise<ServiceResult> {
        let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

        const result = await this.operacionPagoRepository.find({
            where: { cod_operacion: cod_operacion },
            order: { sec: 'ASC' }
        });
        const count = result.length;

        serviceResult.boolean = count > 0 ? true : false;
        serviceResult.message = count + ' detalle(s) de pagos encontrado(s).';
        serviceResult.number = count;
        serviceResult.data = result;

        return serviceResult;
    }

    async update(cod_operacion: string, updateOperacionPagoDto: UpdateOperacionPagoDto): Promise<ServiceResult> {
        let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

        const updateObj = await this.operacionPagoRepository.update(cod_operacion, updateOperacionPagoDto);

        serviceResult.boolean = updateObj.affected === 1 ? true : false;
        serviceResult.message = updateObj.affected === 1 ? 'Se ha actualizado correctamente.' : 'No se ha modificado.';
        serviceResult.number = updateObj.affected;

        return serviceResult;
    }

    async remove(cod_operacion: string): Promise<ServiceResult> {
        let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

        const removeObj = await this.operacionPagoRepository.delete(cod_operacion);

        serviceResult.boolean = removeObj.affected === 1 ? true : false;
        serviceResult.message = removeObj.affected === 1 ? 'Se ha eliminado correctamente.' : 'No se ha encontrado al operacion.';
        serviceResult.number = removeObj.affected;
        serviceResult.object = removeObj.affected === 1 ? removeObj : null;

        return serviceResult;
    }
  
}