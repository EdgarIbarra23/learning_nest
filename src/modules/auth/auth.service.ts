import { Injectable } from '@nestjs/common';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { UsersService } from '../users/users.service';
import { CreateUserDto } from '../users/dto/create-user.dto';
import * as bcrypt from 'bcrypt';
import { NotFoundCustomException } from 'src/common/exceptions/NotFoundCustomException';
import { manageError } from 'src/common/helpers/ErrorHandler.helper';
import { JwtService } from '@nestjs/jwt';
import { ApiResponse } from 'src/common/responses/ApiResponse';

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UsersService,
        private jwtService: JwtService,
    ) { }

    async validateUser(authCredentials: AuthCredentialsDto) {
        const user = await this.userService.findName(authCredentials.name);
        if (user.data && bcrypt.compareSync(authCredentials.password, user.data.password)) {
            const { password, ...result } = user.data;
            return result;
        }
        return false;
    }

    async login(authCredentialsDto: AuthCredentialsDto) {
        try {
            const user = await this.validateUser(authCredentialsDto);
            
            if (!user) {
                throw new NotFoundCustomException('El nombre de usuario o la contraseña ingresados son incorrectos. Por favor, intenta nuevamente.');
            }

            const token = this.jwtService.sign(user);

            return ApiResponse.OK({ token: token });

        } catch (error) {
            manageError(error);
        }
    }

    loggedUser (authHeader: string) {
        try {
            const token = authHeader.split(' ')[1];
            const user = this.jwtService.decode(token);

            return ApiResponse.OK(user);
        } catch (error) {
            manageError(error);
        }
    }

    logout () {
        try {
            return ApiResponse.OK(null, 'Sesión cerrada exitosamente.');
        } catch (error) {
            manageError(error);
        }
    }
}
