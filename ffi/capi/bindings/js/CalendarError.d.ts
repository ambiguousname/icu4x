// generated by diplomat-tool
import type { pointer, char } from "./diplomat-runtime.d.ts";

// Base enumerator definition
/** Additional information: [1](https://docs.rs/icu/latest/icu/calendar/struct.RangeError.html), [2](https://docs.rs/icu/latest/icu/calendar/enum.DateError.html)
*/
export class CalendarError {
    constructor(value : CalendarError | string);

    get value() : string;

    get ffiValue() : number;

    static Unknown : CalendarError;

    static OutOfRange : CalendarError;

    static UnknownEra : CalendarError;

    static UnknownMonthCode : CalendarError;


    

}