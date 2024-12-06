import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { RolesModule } from '../roles/roles.module';
import { AuthModule } from '../auth/auth.module';
import { EmailModule } from 'src/features/email/email.module';
import { NotificationModule } from 'src/features/notification/notification.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    RolesModule,
    AuthModule,
    EmailModule,
    NotificationModule
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
