import { Module } from '@nestjs/common';
import { FeatureFlagsService } from './feature-flags.service';
import { FeatureFlagsController } from './feature-flags.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from 'src/auth/entities/users.entity';
import { Organization } from 'src/organization/entities/organization.entity';
import { FeatureFlag } from './entities/feature-flag.entity';

@Module({
  imports:[
    SequelizeModule.forFeature([User,Organization,FeatureFlag]),
  ],
  controllers: [FeatureFlagsController],
  providers: [FeatureFlagsService],
})
export class FeatureFlagsModule {}
