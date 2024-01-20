import { HttpException, Injectable, Logger } from '@nestjs/common';
import * as fs from 'fs';
import * as csv from 'fast-csv';
import { MobileSaleService } from '../mobile-sale/mobile-sale.service';
import { FixeSaleService } from '../fixe-sale/fixe-sale.service';

@Injectable()
export class CsvFileService {
  constructor(private mobileSaleService:MobileSaleService,private fixeSaleService:FixeSaleService){}
  async readCSVFile(filePath:string)
  {
    try {
      Logger.verbose(`--- CSV_FILE.SERVICE.READ INIT ---`)
      const csvData=await this.convertCsvToJson(filePath)
      const entries=await Promise.all(csvData.map(async element=>{
        return await this.addARow(element)
      }))
      Logger.verbose(`--- CSV_FILE.SERVICE.READ SUCCESS ---`)
      return entries
    } catch (error) {
      Logger.error(`--- CSV_FILE.SERVICE.READ ERROR ${error} ---`)
      throw new HttpException(error.message,error.status)
    }
  }

  async addARow(row:any[])
  {
    try {
      
      let [orderDate,

        sellerSite,
      
        phoneNumber,
      
        logqc,
      
        sellerName,
      
        campainCard,
      
        otiginFile,
      
        isOutFile,
      
        offerType,
      
        secondarycampain,
      
        finalcampain,
      
        idcontrat,
      
        paid_as]=row
        const entry ={orderDate,

          sellerSite,
        
          phoneNumber,
        
          logqc,
        
          sellerName,
        
          campainCard,
        
          otiginFile,
        
          isOutFile,
        
          offerType,
        
          secondarycampain,
        
          finalcampain,
        
          idcontrat,
        
          paid_as}

      return await this.mobileSaleService.import(entry)
    } catch (error) {
      throw new HttpException(error.message,error.status)
    }
  }

  async convertCsvToJson(filePath: string): Promise<any[]> {
    Logger.verbose(`--- CSV_FILE.SERVICE.TO_JSON... ---`)
    return new Promise((resolve, reject) => {
      const data: any[] = [];

      fs.createReadStream(filePath)
        .pipe(csv.parse({ headers: false,delimiter:';',skipRows:1 }))
        .on('error', error => reject(error))
        .on('data', row => data.push(row))
        .on('end', () => resolve(data));
    });
  }
}
