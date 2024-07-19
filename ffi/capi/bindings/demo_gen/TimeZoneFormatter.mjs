import { CustomTimeZone } from "../CustomTimeZone.mjs"
import { Locale } from "../Locale.mjs"
import { TimeZoneFormatter } from "../TimeZoneFormatter.mjs"
export function formatCustomTimeZone() {
	var terminusArgs = arguments;
	return (function (...args) { return args[0].formatCustomTimeZone }).apply(
        null,
        [
            TimeZoneFormatter.createWithLocalizedGmtFallback.apply(
                null,
                [
                    terminusArgs[0],
                    Locale.createFromString.apply(
                        null,
                        [
                            terminusArgs[1]
                        ]
                    )
                ]
            ),
            CustomTimeZone.createFromString.apply(
                null,
                [
                    terminusArgs[2]
                ]
            )
        ]
    );
}
export function formatCustomTimeZoneNoFallback() {
	var terminusArgs = arguments;
	return (function (...args) { return args[0].formatCustomTimeZoneNoFallback }).apply(
        null,
        [
            TimeZoneFormatter.createWithLocalizedGmtFallback.apply(
                null,
                [
                    terminusArgs[0],
                    Locale.createFromString.apply(
                        null,
                        [
                            terminusArgs[1]
                        ]
                    )
                ]
            ),
            CustomTimeZone.createFromString.apply(
                null,
                [
                    terminusArgs[2]
                ]
            )
        ]
    );
}
