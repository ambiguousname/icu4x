import { FixedDecimal } from "../FixedDecimal.mjs"
import { FixedDecimalFormatter } from "../FixedDecimalFormatter.mjs"
import { Locale } from "../Locale.mjs"
export function format(provider, name, groupingStrategy, f) {
	var terminusArgs = arguments;
	return (function (...args) { return this.format(...args) }).apply(
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
        [
            FixedDecimal.createFromF64WithFloatingPrecision.apply(
                null,
                [
                    terminusArgs[3]
                ]
            )
        ]
    );
}
