import { IsDate, IsDateString, IsLatitude, IsLongitude, IsNotEmpty } from 'class-validator'

export class CreateMeetupRequestDto {
    @IsNotEmpty()
    name: string

    @IsDateString()
    startDate: string

    @IsDateString()
    endDate: string

    @IsNotEmpty()
    locationName: string

    @IsNotEmpty()
    address: string

    @IsLatitude()
    latitude: number

    @IsLongitude()
    longitude: number
}
