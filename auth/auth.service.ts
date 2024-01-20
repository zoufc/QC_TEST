import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthDto } from './dto/create-auth.dto';

@Injectable()
export class AuthService {
    constructor(private jwtService:JwtService){}
    async signIn(authDto:AuthDto)
    {
        try {
            if(authDto.username=="Assane" && authDto.password=="qcTest")
            {
                return await this.jwtService.signAsync(authDto,{secret:process.env.PUBLIC_KEY})
            }
            throw new HttpException("Invalid credentials",HttpStatus.UNAUTHORIZED)
        } catch (error) {
          Logger.error(`--- AUTH.SERVICE.LOGIN ERROR ---`)
            throw new HttpException(error.message,error.status)
        }
    }
}
