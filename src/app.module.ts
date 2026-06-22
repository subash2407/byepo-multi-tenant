import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { databaseConfig } from 'config/db_connection';
import { OrganizationModule } from './organization/organization.module';
import { HelpersService } from './common/helpers/helpers.service';
import { ConfigModule } from '@nestjs/config';
import { FeatureFlagsModule } from './feature-flags/feature-flags.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, }),
    SequelizeModule.forRoot(databaseConfig),
    AuthModule,
    OrganizationModule,
    FeatureFlagsModule,
  ],
  controllers: [AppController],
  providers: [AppService, HelpersService],
})
export class AppModule {}
