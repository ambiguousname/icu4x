import { Calendar } from "../Calendar.mjs"
import { Date } from "../Date.mjs"
import { Locale } from "../Locale.mjs"
export function monthCode(year, month, day, provider, name) {
	var terminusArgs = arguments;
	return (function (...args) { return this.monthCode(...args) }).apply(
        Date.createFromIsoInCalendar.apply(
        null,
        [
            terminusArgs[0],
            terminusArgs[1],
            terminusArgs[2],
            Calendar.createForLocale.apply(
                null,
                [
                    terminusArgs[3],
                    Locale.createFromString.apply(
                        null,
                        [
                            terminusArgs[4]
                        ]
                    )
                ]
            )
        ]
    ),
        [
        ]
    );
}
export function era(year, month, day, provider, name) {
	var terminusArgs = arguments;
	return (function (...args) { return this.era(...args) }).apply(
        Date.createFromIsoInCalendar.apply(
        null,
        [
            terminusArgs[0],
            terminusArgs[1],
            terminusArgs[2],
            Calendar.createForLocale.apply(
                null,
                [
                    terminusArgs[3],
                    Locale.createFromString.apply(
                        null,
                        [
                            terminusArgs[4]
                        ]
                    )
                ]
            )
        ]
    ),
        [
        ]
    );
}
