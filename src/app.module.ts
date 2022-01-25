import { Module } from '@nestjs/common'
import { ApiModules } from './api'
import { NotificationGateway } from './gateways/notification.gateway'
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './auth/auth.module'

@Module({
    imports: [...ApiModules, DatabaseModule, AuthModule],
    providers: [NotificationGateway],
})
export class AppModule {}
