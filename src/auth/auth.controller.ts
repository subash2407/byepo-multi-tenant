import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { responseMessageGenerator } from 'src/common/helpers/helpers.service';

@Controller('auth')
export class AuthController {

    constructor(
        private readonly authService: AuthService
    ) {}

    @Post('login')
    async login(@Body() data:LoginDto): Promise<any> {
        try {
            return await this.authService.login(data);
        } catch (error) {
            return responseMessageGenerator('error', error.message, null);
        }
    }
}
