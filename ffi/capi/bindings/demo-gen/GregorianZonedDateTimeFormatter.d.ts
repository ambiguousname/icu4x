import { CustomTimeZone } from "../CustomTimeZone.mjs"
import { GregorianZonedDateTimeFormatter } from "../GregorianZonedDateTimeFormatter.mjs"
import { IsoDateTime } from "../IsoDateTime.mjs"
import { Locale } from "../Locale.mjs"
export function formatIsoDatetimeWithCustomTimeZone(provider: DataProvider, name: string, dateLength: DateLength, timeLength: TimeLength, year: number, month: number, day: number, hour: number, minute: number, second: number, nanosecond: number, s: string);
