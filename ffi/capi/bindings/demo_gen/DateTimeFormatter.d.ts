import { Calendar } from "../Calendar.mjs"
import { DateTime } from "../DateTime.mjs"
import { DateTimeFormatter } from "../DateTimeFormatter.mjs"
import { IsoDateTime } from "../IsoDateTime.mjs"
import { Locale } from "../Locale.mjs"
export function formatDatetime(provider: DataProvider, name: string, dateLength: DateLength, timeLength: TimeLength, year: number, month: number, day: number, hour: number, minute: number, second: number, nanosecond: number, provider: DataProvider, name: string);
export function formatIsoDatetime(provider: DataProvider, name: string, dateLength: DateLength, timeLength: TimeLength, year: number, month: number, day: number, hour: number, minute: number, second: number, nanosecond: number);