import { FixedDecimal } from "../FixedDecimal.mjs"

export function toString(v) {
	var terminusArgs = arguments;
	return (function (...args) { return this.toString(...args) }).apply(
        FixedDecimal.createFromString.apply(
        null,
        [
            terminusArgs[0]
        ]
    ),
        [
        ]
    );
}
