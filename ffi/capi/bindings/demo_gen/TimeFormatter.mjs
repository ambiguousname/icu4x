import { Calendar } from "../Calendar.mjs"
import { DateTime } from "../DateTime.mjs"
import { IsoDateTime } from "../IsoDateTime.mjs"
import { Locale } from "../Locale.mjs"
import { Time } from "../Time.mjs"
import { TimeFormatter } from "../TimeFormatter.mjs"
export function formatTime() {
	var terminusArgs = arguments;
	return (function (...args) { return args[0].formatTime(...args.slice(1)) }).apply(
        null,
        [
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
export function formatDatetime() {
	var terminusArgs = arguments;
	return (function (...args) { return args[0].formatDatetime(...args.slice(1)) }).apply(
        null,
        [
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
	return (function (...args) { return args[0].formatIsoDatetime(...args.slice(1)) }).apply(
        null,
        [
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
