import {
    Column,
    DataType,
    Model,
    Table,
} from 'sequelize-typescript';
import { OrganizationAttributes } from '../interface/organization.interface';

@Table({
    tableName: 'organization',
    timestamps: true,
})
export class Organization extends Model<OrganizationAttributes> {

    @Column({
        primaryKey: true,
        autoIncrement: true,
        type: DataType.INTEGER,
    })
    declare id: number;

    @Column({
        type: DataType.STRING,
    })
    declare name: string;

    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    declare email: string;

}