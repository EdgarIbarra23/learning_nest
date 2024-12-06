import { forwardRef, Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { JwtModule } from '@nestjs/jwt';
import constants from 'src/config/constants';
import { RolesModule } from '../roles/roles.module';

@Module({
  imports: [
    JwtModule.register({
      secret: constants.JWT_SECRET_KEY,
    }),
    forwardRef(() => UsersModule),
    forwardRef(() => RolesModule),
  ],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthModule {}
