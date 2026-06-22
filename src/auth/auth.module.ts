import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './entities/users.entity';
import { Organization } from 'src/organization/entities/organization.entity';

@Module({
  imports:[
    SequelizeModule.forFeature([User,Organization]),
  ],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
