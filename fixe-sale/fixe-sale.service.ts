import { Injectable } from '@nestjs/common';
import { CreateFixeSaleDto } from './dto/create-fixe-sale.dto';
import { UpdateFixeSaleDto } from './dto/update-fixe-sale.dto';

@Injectable()
export class FixeSaleService {
  create(createFixeSaleDto: CreateFixeSaleDto) {
    return 'This action adds a new fixeSale';
  }

  findAll() {
    return `This action returns all fixeSale`;
  }

  findOne(id: number) {
    return `This action returns a #${id} fixeSale`;
  }

  update(id: number, updateFixeSaleDto: UpdateFixeSaleDto) {
    return `This action updates a #${id} fixeSale`;
  }

  remove(id: number) {
    return `This action removes a #${id} fixeSale`;
  }
}
