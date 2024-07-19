import { Calendar } from "../Calendar.mjs"
import { DateTime } from "../DateTime.mjs"
import { Locale } from "../Locale.mjs"
export function monthCode() {
	var terminusArgs = arguments;
	return (function (...args) { return args[0].monthCode }).apply(
        null,
        [
            DateTime.createFromIsoInCalendar.apply(
                null,
                [
                    terminusArgs[0],
                    terminusArgs[1],
                    terminusArgs[2],
                    terminusArgs[3],
                    terminusArgs[4],
                    terminusArgs[5],
                    terminusArgs[6],
                    Calendar.createForLocale.apply(
                        null,
                        [
                            terminusArgs[7],
                            Locale.createFromString.apply(
                                null,
                                [
                                    terminusArgs[8]
                                ]
                            )
                        ]
                    )
                ]
            )
        ]
    );
}
export function era() {
	var terminusArgs = arguments;
	return (function (...args) { return args[0].era }).apply(
        null,
        [
            DateTime.createFromIsoInCalendar.apply(
                null,
                [
                    terminusArgs[0],
                    terminusArgs[1],
                    terminusArgs[2],
                    terminusArgs[3],
                    terminusArgs[4],
                    terminusArgs[5],
                    terminusArgs[6],
                    Calendar.createForLocale.apply(
                        null,
                        [
                            terminusArgs[7],
                            Locale.createFromString.apply(
                                null,
                                [
                                    terminusArgs[8]
                                ]
                            )
                        ]
                    )
                ]
            )
        ]
    );
}
