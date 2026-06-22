import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Organization } from './entities/organization.entity';
import { OrganizationController } from './organization.controller';
import { OrganizationService } from './organization.service';

@Module({
    imports:[
       SequelizeModule.forFeature([Organization]),
    ],
    controllers: [OrganizationController],
    providers: [OrganizationService],
})
export class OrganizationModule {}
