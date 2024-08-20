import { Injectable } from '@nestjs/common';
import { CategoriaDto } from './dto/categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Categoria } from './entities/categoria.entity';
import { Repository } from 'typeorm';
import { ServiceResult } from 'src/common/interfaces/service.result';

@Injectable()
export class CategoriaService {

    constructor(@InjectRepository(Categoria) private categoriaRepository: Repository<Categoria>) { }

    async create(categoriaDto: CategoriaDto): Promise<ServiceResult> {
        let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

        const newObj = this.categoriaRepository.create(categoriaDto);
        await this.categoriaRepository.save(newObj);

        serviceResult.boolean = true;
        serviceResult.message = 'Categoría se ha agregado correctamente.';
        serviceResult.number = 1;
        serviceResult.object = newObj;

        return serviceResult;
    }

    async findAll(): Promise<ServiceResult> {
        let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

        const result = await this.categoriaRepository
            .createQueryBuilder()
            .orderBy("categoria", "ASC")
            .getMany();

        const count = result.length;

        serviceResult.boolean = count > 0 ? true : false;
        serviceResult.message = count + ' Categoría(as) encontrado(s).';
        serviceResult.number = count;
        serviceResult.data = result;

        return serviceResult;
    }

    async findByID(id_categoria: number): Promise<ServiceResult> {
        let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

        const result = await this.categoriaRepository.findOne({ where: { id_categoria: id_categoria } });

        serviceResult.boolean = result ? true : false;
        serviceResult.message = result ? 'Se ha encontrado.' : 'No se ha encontrado';
        serviceResult.number = result ? 1 : 0;
        serviceResult.object = result ? result : null;

        return serviceResult;
    }

    async update(id_categoria: number, updateCategoriaDto: UpdateCategoriaDto): Promise<ServiceResult> {
        let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

        const updateObj = await this.categoriaRepository.update(id_categoria, updateCategoriaDto);

        serviceResult.boolean = updateObj.affected === 1 ? true : false;
        serviceResult.message = 'Se ha actualizado correctamente.';
        serviceResult.number = updateObj.affected;

        return serviceResult;
    }

    async remove(id_categoria: number): Promise<ServiceResult> {
        let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

        const removeObj = await this.categoriaRepository.delete(id_categoria);

        serviceResult.boolean = removeObj.affected === 1 ? true : false;
        serviceResult.message = removeObj.affected === 1 ? 'Se ha eliminado correctamente.' : 'No se ha encontrado la categoría';
        serviceResult.number = removeObj.affected;
        serviceResult.object = removeObj.affected === 1 ? removeObj : null;

        return serviceResult;
    }

}
