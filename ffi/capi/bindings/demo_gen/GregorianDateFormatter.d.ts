import { GregorianDateFormatter } from "../GregorianDateFormatter.mjs"
import { IsoDate } from "../IsoDate.mjs"
import { IsoDateTime } from "../IsoDateTime.mjs"
import { Locale } from "../Locale.mjs"
export function formatIsoDate(provider: DataProvider, name: string, length: DateLength, year: number, month: number, day: number);
export function formatIsoDatetime(provider: DataProvider, name: string, length: DateLength, year: number, month: number, day: number, hour: number, minute: number, second: number, nanosecond: number);