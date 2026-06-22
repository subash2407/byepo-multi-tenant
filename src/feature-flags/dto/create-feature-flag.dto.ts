import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateFeatureFlagDto {

  @IsNumber()
  declare organization_id: number;

  @IsString()
  @IsNotEmpty()
  declare feature_key: string;

  @IsBoolean()
  declare is_enabled: boolean;
}

export class UpdateFeatureFlagDto {
  declare is_enabled: boolean;
}