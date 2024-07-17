import { Calendar } from "../Calendar.mjs"
import { DateTime } from "../DateTime.mjs"
import { DateTimeFormatter } from "../DateTimeFormatter.mjs"
import { IsoDateTime } from "../IsoDateTime.mjs"
import { Locale } from "../Locale.mjs"
export function formatDatetime(provider, name, dateLength, timeLength, year, month, day, hour, minute, second, nanosecond, provider, name) {
	var terminusArgs = arguments;
	return (function (...args) { return this.formatDatetime(...args) }).apply(
        DateTimeFormatter.createWithLengths.apply(
        null,
        [
            terminusArgs[0],
            Locale.createFromString.apply(
                null,
                [
                    terminusArgs[1]
                ]
            ),
            terminusArgs[2],
            terminusArgs[3]
        ]
    ),
        [
            DateTime.createFromIsoInCalendar.apply(
                null,
                [
                    terminusArgs[4],
                    terminusArgs[5],
                    terminusArgs[6],
                    terminusArgs[7],
                    terminusArgs[8],
                    terminusArgs[9],
                    terminusArgs[10],
                    Calendar.createForLocale.apply(
                        null,
                        [
                            terminusArgs[11],
                            Locale.createFromString.apply(
                                null,
                                [
                                    terminusArgs[12]
                                ]
                            )
                        ]
                    )
                ]
            )
        ]
    );
}
export function formatIsoDatetime(provider, name, dateLength, timeLength, year, month, day, hour, minute, second, nanosecond) {
	var terminusArgs = arguments;
	return (function (...args) { return this.formatIsoDatetime(...args) }).apply(
        DateTimeFormatter.createWithLengths.apply(
        null,
        [
            terminusArgs[0],
            Locale.createFromString.apply(
                null,
                [
                    terminusArgs[1]
                ]
            ),
            terminusArgs[2],
            terminusArgs[3]
        ]
    ),
        [
            IsoDateTime.create.apply(
                null,
                [
                    terminusArgs[4],
                    terminusArgs[5],
                    terminusArgs[6],
                    terminusArgs[7],
                    terminusArgs[8],
                    terminusArgs[9],
                    terminusArgs[10]
                ]
            )
        ]
    );
}
