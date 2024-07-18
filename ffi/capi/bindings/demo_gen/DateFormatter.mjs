import { Calendar } from "../Calendar.mjs"
import { Date } from "../Date.mjs"
import { DateFormatter } from "../DateFormatter.mjs"
import { DateTime } from "../DateTime.mjs"
import { IsoDate } from "../IsoDate.mjs"
import { IsoDateTime } from "../IsoDateTime.mjs"
import { Locale } from "../Locale.mjs"
export function formatDate() {
	var terminusArgs = arguments;
	return (function (...args) { return this.formatDate(...args) }).apply(
        DateFormatter.createWithLength.apply(
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
            Date.createFromIsoInCalendar.apply(
                null,
                [
                    terminusArgs[3],
                    terminusArgs[4],
                    terminusArgs[5],
                    Calendar.createForLocale.apply(
                        null,
                        [
                            terminusArgs[6],
                            Locale.createFromString.apply(
                                null,
                                [
                                    terminusArgs[7]
                                ]
                            )
                        ]
                    )
                ]
            )
        ]
    );
}
export function formatIsoDate() {
	var terminusArgs = arguments;
	return (function (...args) { return this.formatIsoDate(...args) }).apply(
        DateFormatter.createWithLength.apply(
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
            IsoDate.create.apply(
                null,
                [
                    terminusArgs[3],
                    terminusArgs[4],
                    terminusArgs[5]
                ]
            )
        ]
    );
}
export function formatDatetime() {
	var terminusArgs = arguments;
	return (function (...args) { return this.formatDatetime(...args) }).apply(
        DateFormatter.createWithLength.apply(
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
export function formatIsoDatetime() {
	var terminusArgs = arguments;
	return (function (...args) { return this.formatIsoDatetime(...args) }).apply(
        DateFormatter.createWithLength.apply(
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
