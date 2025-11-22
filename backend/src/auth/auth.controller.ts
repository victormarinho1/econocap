import { Body, Controller, HttpCode, HttpStatus, Inject, Post } from '@nestjs/common';
import { Prisma } from 'generated/prisma/browser';
import { AuthService } from './auth.service';
import { Public } from './decorators/public.decorator';

@Controller('auth')
export class AuthController {
    @Inject()
    private readonly authService:AuthService;


    @Public()
    @HttpCode(HttpStatus.OK)
    @Post('signin')
    signin(@Body() body:Prisma.usersCreateInput){
        return this.authService.signin(body);
    }
}
