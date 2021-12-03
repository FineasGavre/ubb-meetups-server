import { Injectable } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { ExtractJwt, Strategy } from 'passport-jwt'
import { DatabaseService } from '../database/database.service'
import { AccessTokenInterface } from './interfaces/access-token.interface'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly databaseService: DatabaseService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: process.env.APP_SECRET,
            passReqToCallback: true,
        })
    }

    async validate(req: any, payload: AccessTokenInterface) {
        if (payload.sub) {
            const userId = payload.sub

            if (userId) {
                req.user = await this.databaseService.user.findFirst({
                    where: {
                        id: userId,
                    },
                })
            }
        }

        return req.user
    }
}
