import { Injectable } from '@nestjs/common';
import { Organization } from './entities/organization.entity';
import { InjectModel } from '@nestjs/sequelize';
import { responseMessageGenerator } from 'src/common/helpers/helpers.service';
import { CreateOrganizationDto } from './dto/organization.dto';

@Injectable()
export class OrganizationService {

    constructor(
        @InjectModel(Organization)
        private readonly organizationModel: typeof Organization,
        
    ) {}

    async create(data: CreateOrganizationDto) {
        try{
            const organization = await this.organizationModel.create(data);
            
            return await responseMessageGenerator('success', 'Organization created successfully', organization);
        } catch (error) {
            return responseMessageGenerator('error', error instanceof Error ? error.message : 'An error occurred', null);
        }
    }

    async getOrganizations(){
        try{
            const organizations = await this.organizationModel.findAll();
            return await responseMessageGenerator('success', 'Organizations retrieved successfully', organizations);
        }catch(error){
            return responseMessageGenerator('error', error instanceof Error ? error.message : 'An error occurred', null);
        }
    }
}
