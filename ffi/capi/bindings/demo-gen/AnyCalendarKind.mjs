import { AnyCalendarKind } from "../AnyCalendarKind.mjs"
export function bcp47(self) {
	var terminusArgs = arguments;
	return (function (...args) { return this.bcp47(...args) }).apply(
        terminusArgs[0],
        [
        ]
    );
}
