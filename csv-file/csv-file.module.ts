import { Module } from '@nestjs/common';
import { CsvFileService } from './csv-file.service';
import { CsvFileController } from './csv-file.controller';
import { MobileSaleModule } from '../mobile-sale/mobile-sale.module';
import { FixeSaleModule } from '../fixe-sale/fixe-sale.module';
import { MobileSaleService } from '../mobile-sale/mobile-sale.service';
import { FixeSaleService } from '../fixe-sale/fixe-sale.service';

@Module({
  imports:[FixeSaleModule,MobileSaleModule],
  controllers: [CsvFileController],
  providers: [CsvFileService],
})
export class CsvFileModule {}
