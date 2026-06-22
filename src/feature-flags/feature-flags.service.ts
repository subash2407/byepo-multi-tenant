import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateFeatureFlagDto } from './dto/create-feature-flag.dto';
import { UpdateFeatureFlagDto } from './dto/update-feature-flag.dto';
import { FeatureFlag } from './entities/feature-flag.entity';
import { InjectModel } from '@nestjs/sequelize';
import { responseMessageGenerator } from 'src/common/helpers/helpers.service';

@Injectable()
export class FeatureFlagsService {
  constructor(
    @InjectModel(FeatureFlag)
    private readonly featureFlagModel: typeof FeatureFlag,
  ) {}

  async create(createFeatureFlagDto: CreateFeatureFlagDto) {
    try{
      const existingFeature = await this.featureFlagModel.findOne({
        where: {
          organization_id: createFeatureFlagDto.organization_id,
          feature_key: createFeatureFlagDto.feature_key,
        },
      });

      if (existingFeature) {
        throw new BadRequestException(
          'Feature key already exists',
        );
      }
      const featureFlag = await this.featureFlagModel.create(createFeatureFlagDto);
      return responseMessageGenerator('success', 'Feature flag created successfully', featureFlag);
    }catch(error){
      return responseMessageGenerator('error', 'Failed to create feature flag', null);  
    }
  }

  async findAll(
    organization_id: number,
    feature_key?: string,
  ) {
    try{
      const whereCondition: any = {
        organization_id,
      };

      if (feature_key) {
        whereCondition.feature_key = feature_key;
      }

      const featureFlags = await this.featureFlagModel.findAll({
        where: whereCondition,
      });

      return responseMessageGenerator(
        'success',
        'Feature flags fetched successfully',
        featureFlags,
      );
    }catch(error){
      return responseMessageGenerator('error', 'Failed to fetch feature flags', null);  
    }
  }
  async update(
    id: number,
    organization_id: number,
    data: UpdateFeatureFlagDto,
  ) {
    try{
      const featureFlag = await this.featureFlagModel.findOne({
        where: {
          id,
          organization_id,
        },
      });

      if (!featureFlag) {
        throw new NotFoundException(
          'Feature flag not found',
        );
      }

      await featureFlag.update({
        is_enabled: data.is_enabled,
      });

      return responseMessageGenerator(
        'success',
        'Feature flag updated successfully',
        featureFlag,
      );
    }catch(error){
      return responseMessageGenerator('error', 'Failed to update feature flag', null);  
    }
  }

  async remove(
    id: number,
    organization_id: number,
  ) {
    try{
      const featureFlag = await this.featureFlagModel.findOne({
        where: {
          id,
          organization_id,
        },
      });

      if (!featureFlag) {
        throw new NotFoundException(
          'Feature flag not found',
        );
      }

      await featureFlag.destroy();

      return responseMessageGenerator(
        'success',
        'Feature flag deleted successfully',
        null,
      );
    }catch(error){
      return responseMessageGenerator('error', 'Failed to delete feature flag', null);  
    }
  }

  async checkFeature(
    organization_id: number,
    feature_key: string,
  ) {
    try{
      const featureFlag = await this.featureFlagModel.findOne({
        where: {
          organization_id,
          feature_key,
        },
      });

      return responseMessageGenerator(
        'success',
        'Feature status fetched successfully',
        {
          enabled: featureFlag?.is_enabled ?? false,
        },
      );
    }catch(error){
      return responseMessageGenerator('error', 'Failed to fetch feature status', null);  
    }
  }
}
