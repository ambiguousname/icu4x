import { DateTimeAlignment, DateTimeFormatter, DateTimeLength, IsoDate, Locale, Time, TimePrecision, YearStyle } from "icu4x";

let locale = Locale.fromString("en");

let length = DateTimeLength.Long;

let precision = TimePrecision.Hour;

let alignment = DateTimeAlignment.Auto;

let yearStyle = YearStyle.Full;

let formatter = DateTimeFormatter.createYmdt(locale, length, precision, alignment, yearStyle);

let date = new IsoDate("1990", "1", "1");

let time = new Time(10, 0, 0, 0);

console.log(formatter.formatIso(date, time));