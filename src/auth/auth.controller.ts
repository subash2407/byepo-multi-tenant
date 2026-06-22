import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto, SignupDto } from './dto/login.dto';
import { responseMessageGenerator } from 'src/common/helpers/helpers.service';

@Controller('auth')
export class AuthController {

    constructor(
        private readonly authService: AuthService
    ) {}

    @Post('login')
    async login(@Body() data:LoginDto): Promise<any> {
        return await this.authService.login(data)
    }

    @Post('signup')
    async signup(@Body() data:SignupDto): Promise<any> {
        return await this.authService.signup(data)
    }
}
