import { GregorianDateTimeFormatter } from "../GregorianDateTimeFormatter.mjs"
import { IsoDateTime } from "../IsoDateTime.mjs"
import { Locale } from "../Locale.mjs"
export function formatIsoDatetime(provider, name, dateLength, timeLength, year, month, day, hour, minute, second, nanosecond) {
	var terminusArgs = arguments;
	return (function (...args) { return this.formatIsoDatetime(...args) }).apply(
        GregorianDateTimeFormatter.createWithLengths.apply(
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
