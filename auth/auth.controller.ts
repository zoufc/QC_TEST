import { Controller, Get, Post, Body, Patch, Param, Delete, Logger, Res, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/create-auth.dto';


@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async create(@Body() authDto: AuthDto,@Res() res) {
    try {
      Logger.verbose(`--- AUTH.CONTROLLER.LOGIN INIT ---`)
      const token=await this.authService.signIn(authDto)
      Logger.verbose(`--- AUTH.CONTROLLER.LOGIN SUCCESS ---`)
      return res.status(HttpStatus.OK).json({token})
    } catch (error) {
      Logger.error(`--- AUTH.CONTROLLER.LOGIN ERROR ${error} ---`)
      return res.status(error.status).json(error)
    }
  }

  
}
