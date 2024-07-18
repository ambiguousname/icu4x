import { Calendar } from "../Calendar.mjs"
import { Date } from "../Date.mjs"
import { DateFormatter } from "../DateFormatter.mjs"
import { DateTime } from "../DateTime.mjs"
import { IsoDate } from "../IsoDate.mjs"
import { IsoDateTime } from "../IsoDateTime.mjs"
import { Locale } from "../Locale.mjs"
export function formatDate(provider: DataProvider, name: string, dateLength: DateLength, year: number, month: number, day: number, provider: DataProvider, name: string);
export function formatIsoDate(provider: DataProvider, name: string, dateLength: DateLength, year: number, month: number, day: number);
export function formatDatetime(provider: DataProvider, name: string, dateLength: DateLength, year: number, month: number, day: number, hour: number, minute: number, second: number, nanosecond: number, provider: DataProvider, name: string);
export function formatIsoDatetime(provider: DataProvider, name: string, dateLength: DateLength, year: number, month: number, day: number, hour: number, minute: number, second: number, nanosecond: number);
