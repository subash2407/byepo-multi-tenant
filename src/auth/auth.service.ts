import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginDto, SignupDto } from './dto/login.dto';
import { responseMessageGenerator } from 'src/common/helpers/helpers.service';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './entities/users.entity';
import * as bcrypt from 'bcrypt';
import { Organization } from 'src/organization/entities/organization.entity';
import { JwtService } from '@nestjs/jwt';
import { Role } from 'src/common/enum';

@Injectable()
export class AuthService {
    constructor(
        @InjectModel(User) private userModel: typeof User,
        @InjectModel(Organization) private organisationModel: typeof Organization,
        private readonly jwtService: JwtService,
    ) {}
    
    async login(data: LoginDto) {
        try{
            // Check Super Admin
            if (
                data.email === process.env.SUPER_ADMIN_EMAIL &&
                data.password === process.env.SUPER_ADMIN_PASSWORD
            ) {
                console.log('Super Admin login successful');
                const response = {
                    access_token: await this.jwtService.signAsync({
                        role: Role.SUPER_ADMIN,
                    }),
                    organization_id: null,
                    role: Role.SUPER_ADMIN,
                    user_id: null,
                };
                return responseMessageGenerator('success', 'Login successfully', response);
            }
            // Check normal users
            const user = await this.userModel.findOne({
                where: { email: data.email },
            });

            if (!user) {
                throw new UnauthorizedException();
            }

            const isValid = await bcrypt.compare(
                data.password,
                user.password,
            );

            if (!isValid) {
                throw new UnauthorizedException();
            }

            const response = {
                access_token: await this.jwtService.signAsync({
                    id: user.id,
                    organization_id: user.organization_id,
                    role: user.role,
                }),
                organization_id: user.organization_id,
                role: user.role,
                user_id: user.id
            };
            return responseMessageGenerator('success', 'Login successfully', response);
        } catch (error) {
            return await responseMessageGenerator('error', error instanceof Error ? error.message : 'An error occurred', null);
        }
    }


    async signup(data: SignupDto) {
        try{
            const existingUser = await this.userModel.findOne({
                where: {
                  email: data.email,
                },
            });

            if (existingUser) {
                throw new BadRequestException(
                   'Email already exists',
                );
            }

            const hashedPassword = await bcrypt.hash(
                data.password,
                10,
            );

            const user = await this.userModel.create({
                name: data.name,
                email: data.email,
                password: hashedPassword,
                organization_id: data.organization_id,
                role: data?.role || Role.END_USER,
            });

            return await responseMessageGenerator('success', 'User registered successfully', user);
        }catch (error) {
            return await responseMessageGenerator('error', error instanceof Error ? error.message : 'An error occurred', null);
        }
    }

}
