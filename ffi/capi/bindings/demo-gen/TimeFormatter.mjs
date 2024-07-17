import { Locale } from "../Locale.mjs"
import { Time } from "../Time.mjs"
import { TimeFormatter } from "../TimeFormatter.mjs"

export function formatTime(provider, name, length, hour, minute, second, nanosecond) {
	var terminusArgs = arguments;
	return (function (...args) { return this.formatTime(...args) }).apply(
        TimeFormatter.createWithLength.apply(
        null,
        [
            terminusArgs[0],
            Locale.createFromString.apply(
                null,
                [
                    terminusArgs[1]
                ]
            ),
            terminusArgs[2]
        ]
    ),
        [
            Time.create.apply(
                null,
                [
                    terminusArgs[3],
                    terminusArgs[4],
                    terminusArgs[5],
                    terminusArgs[6]
                ]
            )
        ]
    );
}
import { Calendar } from "../Calendar.mjs"
import { DateTime } from "../DateTime.mjs"
import { Locale } from "../Locale.mjs"
import { TimeFormatter } from "../TimeFormatter.mjs"

export function formatDatetime(provider, name, length, year, month, day, hour, minute, second, nanosecond, provider, name) {
	var terminusArgs = arguments;
	return (function (...args) { return this.formatDatetime(...args) }).apply(
        TimeFormatter.createWithLength.apply(
        null,
        [
            terminusArgs[0],
            Locale.createFromString.apply(
                null,
                [
                    terminusArgs[1]
                ]
            ),
            terminusArgs[2]
        ]
    ),
        [
            DateTime.createFromIsoInCalendar.apply(
                null,
                [
                    terminusArgs[3],
                    terminusArgs[4],
                    terminusArgs[5],
                    terminusArgs[6],
                    terminusArgs[7],
                    terminusArgs[8],
                    terminusArgs[9],
                    Calendar.createForLocale.apply(
                        null,
                        [
                            terminusArgs[10],
                            Locale.createFromString.apply(
                                null,
                                [
                                    terminusArgs[11]
                                ]
                            )
                        ]
                    )
                ]
            )
        ]
    );
}
import { IsoDateTime } from "../IsoDateTime.mjs"
import { Locale } from "../Locale.mjs"
import { TimeFormatter } from "../TimeFormatter.mjs"

export function formatIsoDatetime(provider, name, length, year, month, day, hour, minute, second, nanosecond) {
	var terminusArgs = arguments;
	return (function (...args) { return this.formatIsoDatetime(...args) }).apply(
        TimeFormatter.createWithLength.apply(
        null,
        [
            terminusArgs[0],
            Locale.createFromString.apply(
                null,
                [
                    terminusArgs[1]
                ]
            ),
            terminusArgs[2]
        ]
    ),
        [
            IsoDateTime.create.apply(
                null,
                [
                    terminusArgs[3],
                    terminusArgs[4],
                    terminusArgs[5],
                    terminusArgs[6],
                    terminusArgs[7],
                    terminusArgs[8],
                    terminusArgs[9]
                ]
            )
        ]
    );
}
