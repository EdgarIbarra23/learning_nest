import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/modules/auth/auth.service';
import { ForbiddenCustomException } from '../exceptions/ForbiddenCustomException';

@Injectable()
export class RolesPermissionGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private authService: AuthService,
  ) { }

  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const requiredRoles = this.reflector.get<string[]>('roles', context.getHandler());
    const request = context.switchToHttp().getRequest();
    const authHeaderAuthorization = request.headers['authorization'];
    const user = this.authService.loggedUser(authHeaderAuthorization);

    const hasPermission = requiredRoles.some((role) => user.data.role.name.includes(role));

    if (!hasPermission) {
      throw new ForbiddenCustomException('Acceso denegado: no tienes los permisos adecuados.');
    }

    return true;
  }
}
