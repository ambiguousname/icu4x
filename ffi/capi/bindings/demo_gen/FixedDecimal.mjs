import { FixedDecimal } from "../FixedDecimal.mjs"
export function toString() {
	var terminusArgs = arguments;
	return (function (...args) { return args[0].toString }).apply(
        null,
        [
            FixedDecimal.fromNumberWithFloatingPrecision.apply(
                null,
                [
                    terminusArgs[0]
                ]
            )
        ]
    );
}
