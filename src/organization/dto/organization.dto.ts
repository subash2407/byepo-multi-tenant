import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateOrganizationDto {
    @IsString()
    @IsNotEmpty()
    declare name: string;

    @IsString()
    @IsOptional()
    declare email: string;
}