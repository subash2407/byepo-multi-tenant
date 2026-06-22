import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { databaseConfig } from 'config/db_connection';
import { OrganizationModule } from './organization/organization.module';
import { HelpersService } from './common/helpers/helpers.service';

@Module({
  imports: [
    SequelizeModule.forRoot(databaseConfig),
    AuthModule,
    OrganizationModule
  ],
  controllers: [AppController],
  providers: [AppService, HelpersService],
})
export class AppModule {}
