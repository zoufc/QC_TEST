import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule, JwtService } from '@nestjs/jwt';

@Module({
  imports:[JwtModule.register({
    global: true,
    secret: process.env.PUBLIC_KEY,
    signOptions: { expiresIn: '300s' },
  })],
  controllers: [AuthController],
  providers: [AuthService,JwtService],
  exports:[JwtModule]
})
export class AuthModule {}
