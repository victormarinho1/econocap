import {
  CanActivate,
  ExecutionContext,
  Inject,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { IS_PUBLIC_KEY } from './decorators/public.decorator';
import { Reflector } from '@nestjs/core';

@Injectable()
export class AuthGuard implements CanActivate {
  @Inject()
  private readonly jwtService: JwtService;

  @Inject()
  private readonly reflector: Reflector


  async canActivate(context: ExecutionContext): Promise<boolean> {
    
  const request = context.switchToHttp().getRequest();
  const authorization = this.extractTokenFromHeader(request);
  const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

  if (isPublic) return true;

  if(!authorization) throw new UnauthorizedException('Token is required');

  try {
    const payload = this.jwtService.verify(authorization,{
      secret: process.env.SECRET_KEY
    }); 
    request.users = payload;
  }catch(erro){
    throw new UnauthorizedException('Invalid token');
  }
  return true;
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers['authorization']?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}
