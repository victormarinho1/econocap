import { forwardRef, Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersService } from 'src/users/users.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UsersModule } from 'src/users/users.module';
import { AuthGuard } from './auth.guard';

@Module({
  imports: [
    ConfigModule,
    forwardRef(()=>UsersModule),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        const secret = configService.get<string>('SECRET_KEY');
        if (!secret) {
          throw new Error('SECRET_KEY environment variable is not set!');
        }
        return {
          secret,
          signOptions: { expiresIn: '3600s' },
        };
      },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, UsersService, PrismaService,AuthGuard],
  exports:[AuthGuard,AuthService,JwtModule]
})
export class AuthModule {}
