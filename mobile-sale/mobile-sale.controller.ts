import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MobileSaleService } from './mobile-sale.service';
import { CreateMobileSaleDto } from './dto/create-mobile-sale.dto';
import { UpdateMobileSaleDto } from './dto/update-mobile-sale.dto';

@Controller('mobile-sale')
export class MobileSaleController {
  constructor(private readonly mobileSaleService: MobileSaleService) {}

  
}
