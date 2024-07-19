import { CustomTimeZone } from "../CustomTimeZone.mjs"
import { GregorianZonedDateTimeFormatter } from "../GregorianZonedDateTimeFormatter.mjs"
import { IsoDateTime } from "../IsoDateTime.mjs"
import { Locale } from "../Locale.mjs"
export function formatIsoDatetimeWithCustomTimeZone() {
	var terminusArgs = arguments;
	return (function (...args) { return args[0].formatIsoDatetimeWithCustomTimeZone(...args.slice(1)) }).apply(
        null,
        [
            GregorianZonedDateTimeFormatter.createWithLengths.apply(
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
