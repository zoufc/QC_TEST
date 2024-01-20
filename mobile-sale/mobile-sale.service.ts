import { HttpException, Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MobileSale } from './entities/mobile-sale.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MobileSaleService {
  constructor(
    @InjectRepository(MobileSale)
    private usersRepository: Repository<MobileSale>,
  ) {}

  async import(row:any)
  {
    try {
      Logger.verbose("--- MOBILE_SALE.SERVICE.IMPORT INIT ---")
      const data=this.usersRepository.create(row)      
      Logger.verbose("--- MOBILE_SALE.SERVICE.IMPORT SUCCESS ---")
      return data
    } catch (error) {
      Logger.error(`--- MOBILE_SALE.SERVICE.IMPORT ERROR ${error} ---`)
      throw new HttpException(error.message,error.status)
    }
  }

}
