import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFiles, Logger, Res, Req, HttpStatus } from '@nestjs/common';
import { CsvFileService } from './csv-file.service';
import { CreateCsvFileDto } from './dto/create-csv-file.dto';
import { UpdateCsvFileDto } from './dto/update-csv-file.dto';
import { FileFieldsInterceptor, FileInterceptor } from '@nestjs/platform-express';

@Controller('csv-file')
export class CsvFileController {
  constructor(private readonly csvFileService: CsvFileService) {}

  @Post('import')
  async create(@Req() req,@Res() res) {
    try {
      Logger.verbose(`--- CSV_FILE.CONTROLLER.IMPORT INIT  ---`)
      console.log(req.query.mobile);
      const path=req.query.mobile
      const data =await this.csvFileService.readCSVFile(path)
      Logger.verbose(`--- CSV_FILE.CONTROLLER.IMPORT SUCCESS ---`)
      return res.status(HttpStatus.OK).json(data)
    } catch (error) {
      Logger.error(`--- CSV_FILE.CONTROLLER.IMPORT ERROR ${error} ---`)
      return res.status(error.status).json(error)
    }
    
  }

}
