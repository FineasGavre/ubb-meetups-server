import { LoginResponseDto } from './login-response.dto'
import { IsEmail } from 'class-validator'

export class RegisterResponseDto extends LoginResponseDto {
    @IsEmail()
    email: string
}
