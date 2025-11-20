import { Inject, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { Prisma } from 'generated/prisma/client';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    @Inject()
    private readonly userService:UsersService

    @Inject()
    private readonly jwtService:JwtService

    async signin(params: Prisma.usersCreateInput):Promise<User>{
        const user = await this.userService.user({email: params.email});
        if(!user) throw new NotFoundException('User not found')        
        const passwordMatch = await bcrypt.compare(params.password_hash, user.password_hash)
        if(!passwordMatch) throw new UnauthorizedException('Invalid credentials');     
        const { password_hash, ...result} = user ;

        const payload = { sub: user.id, role: user.role };
   
        return  { access_token: await this.jwtService.signAsync(payload)};
    }
}
