import { Body, Controller, Post } from '@nestjs/common'
import { AuthService } from './auth.service'
import { LoginRequestDto } from './contracts/request/login-request.dto'
import { LoginResponseDto } from './contracts/response/login-response.dto'
import { RegisterRequestDto } from './contracts/request/register-request.dto'
import { RegisterResponseDto } from './contracts/response/register-response.dto'

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('login')
    async login(@Body() { email, password }: LoginRequestDto): Promise<LoginResponseDto> {
        const user = await this.authService.validateUser(email, password);
        return this.authService.login(user);
    }

    @Post('register')
    async register(@Body() { email, password }: RegisterRequestDto): Promise<RegisterResponseDto> {
        return this.authService.register(email, password);
    }
}
