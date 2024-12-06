import { Module } from '@nestjs/common';
import { ModulesModule } from './modules/modules.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { dataSourceConfig } from 'datasource';
import { NotificationModule } from './features/notification/notification.module';
import { EmailModule } from './features/email/email.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        ...dataSourceConfig,
        autoLoadEntities: true,
      }),
      inject: [ConfigService],
    }),
    ModulesModule,
    NotificationModule,
    EmailModule,
  ],
})
export class AppModule {}
