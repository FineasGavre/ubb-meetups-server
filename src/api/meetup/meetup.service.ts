import { Injectable } from '@nestjs/common';
import { Meetup, User } from '@prisma/client'
import { DatabaseService } from '../../database/database.service'
import { CreateMeetupRequestDto } from './contracts/request/create-meetup-request.dto'
import { DateUtils } from '../../utils/date.utils'

@Injectable()
export class MeetupService {
    constructor(private database: DatabaseService) {}

    async getAllMeetups(): Promise<Meetup[]> {
        return this.database.meetup.findMany()
    }

    async getSpecificMeetup(meetupId: string): Promise<Meetup> {
        return this.database.meetup.findFirst({
            where: {
                id: meetupId
            }
        })
    }

    async createMeetup(user: User, meetupData: CreateMeetupRequestDto): Promise<Meetup> {
        return this.database.meetup.create({
            data: {
                name: meetupData.name,
                startDate: DateUtils.convertDateStringToDateTime(meetupData.startDate),
                endDate: DateUtils.convertDateStringToDateTime(meetupData.endDate),
                locationName: meetupData.locationName,
                address: meetupData.address,
                locationLatitude: meetupData.latitude,
                locationLongitude: meetupData.longitude,
                user_id: user.id
            }
        })
    }
}
