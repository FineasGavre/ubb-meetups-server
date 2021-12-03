import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common'
import { AttendanceState, MeetupInterface } from '../../interfaces/meetup.interface'
import { UmsAuthGuard } from '../../auth/guards/ums-auth.guard'
import { CreateMeetupRequestDto } from './contracts/request/create-meetup-request.dto'
import { ReqUser } from '../../auth/decorators/req-user.decorator'
import { Meetup, User } from '@prisma/client'
import { MeetupService } from './meetup.service'

@Controller('meetup')
export class MeetupController {
    constructor(private meetupService: MeetupService) {}

    @Get()
    @UseGuards(UmsAuthGuard)
    async findAll(): Promise<Meetup[]> {
        return this.meetupService.getAllMeetups()
    }

    @Get(':id')
    @UseGuards(UmsAuthGuard)
    async findOne(@Param('id') meetupId: string): Promise<Meetup> {
        return this.meetupService.getSpecificMeetup(meetupId)
    }

    @Post()
    @UseGuards(UmsAuthGuard)
    async create(@Body() meetupData: CreateMeetupRequestDto, @ReqUser() user: User): Promise<Meetup> {
        return this.meetupService.createMeetup(user, meetupData)
    }
}
