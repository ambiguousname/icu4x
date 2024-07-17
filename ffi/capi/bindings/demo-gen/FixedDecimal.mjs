import { FixedDecimal } from "../FixedDecimal.mjs"
export function toString(f) {
	var terminusArgs = arguments;
	return (function (...args) { return this.toString(...args) }).apply(
        FixedDecimal.createFromF64WithFloatingPrecision.apply(
        null,
        [
            terminusArgs[0]
        ]
    ),
        [
        ]
    );
}
