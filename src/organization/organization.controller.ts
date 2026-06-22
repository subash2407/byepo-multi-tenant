import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateOrganizationDto } from './dto/organization.dto';
import { OrganizationService } from './organization.service';

@Controller('organization')
export class OrganizationController {
    constructor(
        private readonly organizationService: OrganizationService
    ) {}

    @Post('create-organization')
    async create( @Body() data: CreateOrganizationDto) {
      return this.organizationService.create(data);
    }

    @Get('get-all-organizations')
    async getOrganizations() {
        return this.organizationService.getOrganizations();
    }

}
