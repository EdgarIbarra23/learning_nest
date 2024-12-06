import { CanActivate, ExecutionContext } from "@nestjs/common";
import { Observable } from "rxjs";
import { UnauthorizedCustomException } from "../exceptions/UnauthorizedCustomException";

export class JwtAuthenticatedGuard implements CanActivate {
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const request = context.switchToHttp().getRequest();
        const authHeaderAuthorization = request.headers['authorization'];

        if (!authHeaderAuthorization) {
            throw new UnauthorizedCustomException('No ha iniciado sesión. Por favor, inicie sesión para continuar.')
        }

        return true;
    }
}
