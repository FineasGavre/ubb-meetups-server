import { Controller, Get, Param } from '@nestjs/common'
import { MeetupInterface } from '../../interfaces/meetup.interface'

@Controller('meetup')
export class MeetupController {
    private readonly data: MeetupInterface[] = [
        {
            id: 'HELLO',
            name: 'Mega Party 2021',
            startDate: new Date(),
            endDate: new Date(),
            location: {
                friendlyName: 'Roots',
                address: 'Cluj-Napoca',
                geoCoordinates: {
                    longitude: 0,
                    latitude: 0,
                },
            },
            organizer: {
                id: 'test',
                firstName: 'Fineas',
                lastName: 'Gavre',
            },
            attendances: [],
        },
        {
            id: 'HELLO2',
            name: 'Marvel & Chill',
            startDate: new Date(),
            endDate: new Date(),
            location: {
                friendlyName: 'Roots',
                address: 'Cluj-Napoca',
                geoCoordinates: {
                    longitude: 0,
                    latitude: 0,
                },
            },
            organizer: {
                id: 'test',
                firstName: 'Fineas',
                lastName: 'Gavre',
            },
            attendances: [],
        }
    ]

    @Get()
    findAll(): MeetupInterface[] {
        return this.data
    }

    @Get(':id')
    findOne(@Param('id') meetupId: string): MeetupInterface {
        return this.data.find(meetup => meetup.id === meetupId)
    }
}
