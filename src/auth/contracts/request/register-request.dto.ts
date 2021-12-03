import { IsEmail, IsNotEmpty } from 'class-validator'

export class RegisterRequestDto {
    @IsEmail()
    email: string

    @IsNotEmpty()
    password: string
}
