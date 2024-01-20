import { Module } from '@nestjs/common';
import { FixeSaleService } from './fixe-sale.service';
import { FixeSaleController } from './fixe-sale.controller';

@Module({
  controllers: [FixeSaleController],
  providers: [FixeSaleService],
  exports:[FixeSaleService]
})
export class FixeSaleModule {}
