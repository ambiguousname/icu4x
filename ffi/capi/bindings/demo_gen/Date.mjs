import { Calendar } from "../Calendar.mjs"
import { Date } from "../Date.mjs"
import { Locale } from "../Locale.mjs"
export function monthCode() {
	var terminusArgs = arguments;
	return (function (...args) { return args[0].monthCode(...args.slice(1)) }).apply(
        null,
        [
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
            )
        ]
    );
}
export function era() {
	var terminusArgs = arguments;
	return (function (...args) { return args[0].era(...args.slice(1)) }).apply(
        null,
        [
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
            )
        ]
    );
}
