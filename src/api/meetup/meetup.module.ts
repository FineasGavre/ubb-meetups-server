import { Module } from '@nestjs/common'
import { MeetupController } from './meetup.controller'
import { AuthModule } from '../../auth/auth.module'
import { MeetupService } from './meetup.service';
import { DatabaseModule } from '../../database/database.module'

@Module({
    imports: [AuthModule, DatabaseModule],
    providers: [MeetupService],
    controllers: [MeetupController],
})
export class MeetupModule {}
