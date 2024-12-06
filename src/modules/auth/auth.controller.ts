import { Body, Controller, Get, Headers, Post, UseGuards, UsePipes } from '@nestjs/common';
import { JoiValidationPipe } from 'src/common/pipes/JoiValidation.pipe';
import { authValidation } from './joiValidation';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { AuthService } from './auth.service';
import { JwtAuthenticatedGuard } from 'src/common/guards/JwtAuthenticated.guard';

@Controller('auth')
export class AuthController {
    constructor (
        private readonly authService: AuthService,
    ) {}

    @UsePipes(new JoiValidationPipe(authValidation))
    @Post('login')
    login (@Body() authCredentialsDto: AuthCredentialsDto) {
        return this.authService.login(authCredentialsDto);
    }

    @UseGuards(JwtAuthenticatedGuard)
    @Get('logged-user')
    loggedUser(@Headers('Authorization') authHeader: string) {
        return this.authService.loggedUser(authHeader);
    }

    @UseGuards(JwtAuthenticatedGuard)
    @Post('logout')
    logout() {
        return this.authService.logout();
    }
}
