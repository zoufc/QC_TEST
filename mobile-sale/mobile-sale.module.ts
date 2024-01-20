import { Module } from '@nestjs/common';
import { MobileSaleService } from './mobile-sale.service';
import { MobileSaleController } from './mobile-sale.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MobileSale } from './entities/mobile-sale.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([MobileSale])
  ],
  controllers: [MobileSaleController],
  providers: [MobileSaleService],
  exports:[MobileSaleService]
})
export class MobileSaleModule {}
