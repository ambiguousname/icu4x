import { Calendar } from "../Calendar.mjs"
import { DateTime } from "../DateTime.mjs"
import { IsoDateTime } from "../IsoDateTime.mjs"
import { Locale } from "../Locale.mjs"
import { Time } from "../Time.mjs"
import { TimeFormatter } from "../TimeFormatter.mjs"
export function formatTime(provider: DataProvider, name: string, length: TimeLength, hour: number, minute: number, second: number, nanosecond: number);
export function formatDatetime(provider: DataProvider, name: string, length: TimeLength, year: number, month: number, day: number, hour: number, minute: number, second: number, nanosecond: number, provider: DataProvider, name: string);
export function formatIsoDatetime(provider: DataProvider, name: string, length: TimeLength, year: number, month: number, day: number, hour: number, minute: number, second: number, nanosecond: number);
