import { Module } from '@nestjs/common'
import { DatabaseModule } from '../database/database.module'
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './jwt.strategy'
import { UmsAuthGuard } from './guards/ums-auth.guard'
import { JwtModule } from '@nestjs/jwt'

@Module({
    imports: [
        DatabaseModule,
        JwtModule.register({
            secret: process.env.APP_SECRET,
            signOptions: { expiresIn: '1d' }
        })
    ],
    providers: [AuthService, JwtStrategy, UmsAuthGuard],
    controllers: [AuthController],
    exports: [UmsAuthGuard]
})
export class AuthModule {}
