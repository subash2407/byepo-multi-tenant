import { Injectable } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { responseMessageGenerator } from 'src/common/helpers/helpers.service';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './entities/users.entity';
import * as bcrypt from 'bcrypt';
import { Organization } from 'src/organization/entities/organization.entity';

@Injectable()
export class AuthService {
    constructor(
        @InjectModel(User) private userModel: typeof User,
        @InjectModel(Organization) private organisationModel: typeof Organization,
    ) {}
    
    async login(data:LoginDto): Promise<any> {
        try{
            const checkUser = await this.userModel.findOne({
                where: {
                    email: data.email,
                    organization_id: data.organization_id,
                    is_active: true,
                },
            });
            if(!checkUser){
                return await responseMessageGenerator('failure', 'User not found', null);
            }
            const checkPassword = await bcrypt.compare(data.password, checkUser.password);
            if(!checkPassword){
                return await responseMessageGenerator('failure', 'Invalid password', null);
            }
            return await responseMessageGenerator('success', 'Login successful', {
                id: checkUser.id,
                email: checkUser.email,
                name: checkUser.name,
                organization_id: checkUser.organization_id,
            });
        } catch (error) {
            return await responseMessageGenerator('error', error instanceof Error ? error.message : 'An error occurred', null);
        }
    }

}
