import { Calendar } from "../Calendar.mjs"
import { CustomTimeZone } from "../CustomTimeZone.mjs"
import { DateTime } from "../DateTime.mjs"
import { IsoDateTime } from "../IsoDateTime.mjs"
import { Locale } from "../Locale.mjs"
import { ZonedDateTimeFormatter } from "../ZonedDateTimeFormatter.mjs"
export function formatDatetimeWithCustomTimeZone(provider: DataProvider, name: string, dateLength: DateLength, timeLength: TimeLength, year: number, month: number, day: number, hour: number, minute: number, second: number, nanosecond: number, provider: DataProvider, name: string, s: string);
export function formatIsoDatetimeWithCustomTimeZone(provider: DataProvider, name: string, dateLength: DateLength, timeLength: TimeLength, year: number, month: number, day: number, hour: number, minute: number, second: number, nanosecond: number, s: string);
