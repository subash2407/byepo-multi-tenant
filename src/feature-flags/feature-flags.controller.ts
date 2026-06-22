import { Controller, Get, Post, Body, Patch, Param, Delete, Query, Req, Put } from '@nestjs/common';
import { FeatureFlagsService } from './feature-flags.service';
import { CreateFeatureFlagDto } from './dto/create-feature-flag.dto';
import { UpdateFeatureFlagDto } from './dto/update-feature-flag.dto';

@Controller('feature-flags')
export class FeatureFlagsController {
  constructor(private readonly featureFlagsService: FeatureFlagsService) {}

  @Post()
  async create(@Body() createFeatureFlagDto: CreateFeatureFlagDto) {
    return await this.featureFlagsService.create(createFeatureFlagDto);
  }

  @Get()
  async findAll(
    @Query('organization_id') organizationId: number,
    @Query('feature_key') featureKey?: string,
  ) {
    
      return await this.featureFlagsService.findAll(
        +organizationId,
        featureKey,
      );
  }

@Put()
async update(
  @Query('id') id: number,
  @Query('organization_id') organization_id: number,
  @Body() data: UpdateFeatureFlagDto,
) {
  return await this.featureFlagsService.update(
    Number(id),
    Number(organization_id),
    data,
  );
}

  @Delete()
  async remove(
    @Query('id') id: number,
    @Query('organization_id') organization_id: number,
  ) {
    return await this.featureFlagsService.remove(
      Number(id),
      Number(organization_id),
    );
  }

  @Get('check')
  async checkFeature(
    @Query('organization_id') organization_id: number,
    @Query('feature_key') feature_key: string,
  ) {
    return await this.featureFlagsService.checkFeature(
      Number(organization_id),
      feature_key,
    );
  } 
}
