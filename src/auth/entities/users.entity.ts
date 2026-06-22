import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';

import { Optional } from 'sequelize';
import { UserAttributes } from '../interface/user.interface';
import { Organization } from 'src/organization/entities/organization.entity';

@Table({
  tableName: 'users',
  timestamps: true,
})
export class User extends Model<UserAttributes> {

  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
  })
  declare id: number;

  @ForeignKey(() => Organization)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  declare organization_id: number;

  @BelongsTo(() => Organization)
  declare organization: Organization;

  @Column({
    type: DataType.STRING,
  })
  declare name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare email: string;

  @Column({
    type: DataType.STRING,
  })
  declare password: string;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: true,
  })
  declare is_active: boolean;
}