import { Injectable } from '@nestjs/common'
import { DatabaseService } from '../database/database.service'
import * as bcrypt from 'bcrypt'
import { User } from '@prisma/client'
import { JwtService } from '@nestjs/jwt'
import { LoginResponseDto } from './contracts/response/login-response.dto'
import { RegisterResponseDto } from './contracts/response/register-response.dto'
import { using } from 'rxjs'

@Injectable()
export class AuthService {
    constructor(private readonly database: DatabaseService, private readonly jwtService: JwtService) {}

    async validateUser(email: string, password: string): Promise<User> {
        const user = await this.database.user.findFirst({
            where: {
                email,
            },
        })

        const isValid = await bcrypt.compare(password, user.password)
        if (isValid) {
            return user
        }
    }

    async login(user: User): Promise<LoginResponseDto> {
        const dbUser = await this.database.user.findFirst({
            where: {
                id: user.id,
            },
        })

        const payload = {
            email: dbUser.email,
            sub: dbUser.id,
        }

        return {
            access_token: this.jwtService.sign(payload),
        }
    }

    async register(email: string, password: string): Promise<RegisterResponseDto> {
        password = await this.hashPassword(password)

        const newUser = await this.database.user.create({
            data: {
                email,
                password
            }
        })

        const { access_token } = await this.login(newUser)

        return {
            access_token,
            email: newUser.email
        }
    }

    async hashPassword(password: string): Promise<string> {
        return bcrypt.hash(password, 10)
    }
}
