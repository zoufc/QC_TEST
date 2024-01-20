import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FixeSaleService } from './fixe-sale.service';
import { CreateFixeSaleDto } from './dto/create-fixe-sale.dto';
import { UpdateFixeSaleDto } from './dto/update-fixe-sale.dto';

@Controller('fixe-sale')
export class FixeSaleController {
  constructor(private readonly fixeSaleService: FixeSaleService) {}

  @Post()
  create(@Body() createFixeSaleDto: CreateFixeSaleDto) {
    return this.fixeSaleService.create(createFixeSaleDto);
  }

  @Get()
  findAll() {
    return this.fixeSaleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fixeSaleService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFixeSaleDto: UpdateFixeSaleDto) {
    return this.fixeSaleService.update(+id, updateFixeSaleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fixeSaleService.remove(+id);
  }
}
