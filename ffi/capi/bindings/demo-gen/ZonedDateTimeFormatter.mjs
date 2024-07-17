import { Calendar } from "../Calendar.mjs"
import { CustomTimeZone } from "../CustomTimeZone.mjs"
import { DateTime } from "../DateTime.mjs"
import { IsoDateTime } from "../IsoDateTime.mjs"
import { Locale } from "../Locale.mjs"
import { ZonedDateTimeFormatter } from "../ZonedDateTimeFormatter.mjs"
export function formatDatetimeWithCustomTimeZone() {
	var terminusArgs = arguments;
	return (function (...args) { return this.formatDatetimeWithCustomTimeZone(...args) }).apply(
        ZonedDateTimeFormatter.createWithLengths.apply(
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
            ),
            CustomTimeZone.createFromString.apply(
                null,
                [
                    terminusArgs[13]
                ]
            )
        ]
    );
}
export function formatIsoDatetimeWithCustomTimeZone() {
	var terminusArgs = arguments;
	return (function (...args) { return this.formatIsoDatetimeWithCustomTimeZone(...args) }).apply(
        ZonedDateTimeFormatter.createWithLengths.apply(
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
            ),
            CustomTimeZone.createFromString.apply(
                null,
                [
                    terminusArgs[11]
                ]
            )
        ]
    );
}
