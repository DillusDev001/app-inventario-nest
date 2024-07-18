import { PartialType } from '@nestjs/mapped-types';
import { AlmacenDto } from './almacen.dto';

export class UpdateAlmacenDto extends PartialType(AlmacenDto) {}
