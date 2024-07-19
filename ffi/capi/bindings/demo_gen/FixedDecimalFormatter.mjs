import { FixedDecimal } from "../FixedDecimal.mjs"
import { FixedDecimalFormatter } from "../FixedDecimalFormatter.mjs"
import { Locale } from "../Locale.mjs"
export function format() {
	var terminusArgs = arguments;
	return (function (...args) { return args[0].format(...args.slice(1)) }).apply(
        null,
        [
            FixedDecimalFormatter.createWithGroupingStrategy.apply(
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
            FixedDecimal.fromNumberWithFloatingPrecision.apply(
                null,
                [
                    terminusArgs[3]
                ]
            )
        ]
    );
}
