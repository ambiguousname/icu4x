import { GregorianDateFormatter } from "../GregorianDateFormatter.mjs"
import { IsoDate } from "../IsoDate.mjs"
import { IsoDateTime } from "../IsoDateTime.mjs"
import { Locale } from "../Locale.mjs"
export function formatIsoDate(provider, name, length, year, month, day) {
	var terminusArgs = arguments;
	return (function (...args) { return this.formatIsoDate(...args) }).apply(
        GregorianDateFormatter.createWithLength.apply(
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
export function formatIsoDatetime(provider, name, length, year, month, day, hour, minute, second, nanosecond) {
	var terminusArgs = arguments;
	return (function (...args) { return this.formatIsoDatetime(...args) }).apply(
        GregorianDateFormatter.createWithLength.apply(
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
