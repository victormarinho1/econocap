import { Inject, Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from 'generated/prisma/client';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';
import { usersModel } from 'generated/prisma/models';

@Injectable()
export class UsersService {
  @Inject()
  private prismaService: PrismaService;

   async user(
    userWhereUniqueInput: Prisma.usersWhereUniqueInput,
  ): Promise<usersModel | null> {
    return this.prismaService.users.findUnique({
      where: userWhereUniqueInput,
    });
  }

  async create(data: Prisma.usersCreateInput) {
    console.log(data)
    const hashPassword = await bcrypt.hash(data.password_hash, 10);
    return this.prismaService.users.create({
      data:{...data, password_hash:hashPassword}});
  }

  findAll() {
    return this.prismaService.users.findMany();
  }

  async findOne(email: string) {
   const result = await this.prismaService.users.findUnique({
  where:{
     email: email,
  },
});
return result
  }

  async findById(id: string) {
   const result = await this.prismaService.users.findUnique({
  where:{
     id: id,
  },
});
return result
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
