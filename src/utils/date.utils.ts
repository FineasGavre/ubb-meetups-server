import * as moment from "moment";

export class DateUtils {
    static convertDateStringToDateTime(dateString: string): string {
        return moment(dateString).toDate().toISOString()
    }
}
