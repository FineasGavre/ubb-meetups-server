import { UserInterface } from './user.interface'

export interface MeetupInterface {
    id: string
    name: string
    startDate: Date
    endDate: Date
    location: MeetupLocation
    organizer: UserInterface
    attendances: MeetupUserAttendance[]
}

interface MeetupLocation {
    friendlyName: string
    address: string
    geoCoordinates: {
        latitude: number
        longitude: number
    }
}

interface MeetupUserAttendance {
    attendee: UserInterface
    state: AttendanceState
}

enum AttendanceState {
    DECLINED,
    TENTATIVE,
    ACCEPTED,
    CHECKED_IN,
}
