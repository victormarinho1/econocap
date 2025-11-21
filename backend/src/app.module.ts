import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { UsersModule } from './users/users.module';
import { PromotionsModule } from './promotions/promotions.module';
import { StoresModule } from './stores/stores.module';
import { CategoriesModule } from './categories/categories.module';
import { ProductsModule } from './products/products.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './auth/auth.guard';

@Module({
  imports: [ConfigModule.forRoot(),UsersModule, PromotionsModule, StoresModule, CategoriesModule, ProductsModule, AuthModule],
  controllers: [AppController],
  providers: [AppService, PrismaService,{
    provide: APP_GUARD,
    useClass:AuthGuard
  }],
})
export class AppModule {}
