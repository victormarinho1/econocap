import { Inject, Injectable } from '@nestjs/common';
import { CreatePromotionDto } from './dto/create-promotion.dto';
import { UpdatePromotionDto } from './dto/update-promotion.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from 'generated/prisma/client';

@Injectable()
export class PromotionsService {
  @Inject()
  private prismaService:PrismaService

  create(createPromotionDto: Prisma.promotionsCreateInput) {
    return this.prismaService.promotions.create({
      data:{...createPromotionDto}
    })
  }

  findAll() {
  return this.prismaService.promotions.findMany({
    select: {
      id: true,
      title: true,
      price: true,
      summary: true,
      old_price: true,
      affiliate_url: true,      
      products: {
        include: {
            product_images: true, 
          },
      },
      product_id: false 
    },
  });
}

  findOne(id: number) {
    return `This action returns a #${id} promotion`;
  }

  update(id: number, updatePromotionDto: UpdatePromotionDto) {
    return `This action updates a #${id} promotion`;
  }

  remove(id: number) {
    return `This action removes a #${id} promotion`;
  }
}
