import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Organization } from './entities/organization.entity';

@Module({
    imports:[
       SequelizeModule.forFeature([Organization]),
    ],
})
export class OrganizationModule {}
