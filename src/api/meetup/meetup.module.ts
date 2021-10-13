import { Module } from '@nestjs/common'
import { MeetupController } from './meetup.controller'

@Module({
    imports: [],
    providers: [],
    controllers: [MeetupController]
})
export class MeetupModule {}
