import { Column, ForeignKey, Model, Table } from "sequelize-typescript";
import { Organization } from "src/organization/entities/organization.entity";
import { FeatureFlagAttributes } from "../interface/feature-flag.interface";

@Table({
  tableName: 'feature_flags',
})
export class FeatureFlag extends Model<FeatureFlagAttributes> {
  @Column({
    primaryKey: true,
    autoIncrement: true,
  })
  declare id: number;

  @ForeignKey(() => Organization)
  @Column
  declare organization_id: number;

  @Column
  declare feature_key: string;

  @Column({
    defaultValue: false,
  })
  declare is_enabled: boolean;
}