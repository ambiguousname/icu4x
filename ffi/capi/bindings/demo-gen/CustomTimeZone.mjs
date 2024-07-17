import { CustomTimeZone } from "../CustomTimeZone.mjs"
export function timeZoneId(s) {
	var terminusArgs = arguments;
	return (function (...args) { return this.timeZoneId(...args) }).apply(
        CustomTimeZone.createFromString.apply(
        null,
        [
            terminusArgs[0]
        ]
    ),
        [
        ]
    );
}
export function metazoneId(s) {
	var terminusArgs = arguments;
	return (function (...args) { return this.metazoneId(...args) }).apply(
        CustomTimeZone.createFromString.apply(
        null,
        [
            terminusArgs[0]
        ]
    ),
        [
        ]
    );
}
export function zoneVariant(s) {
	var terminusArgs = arguments;
	return (function (...args) { return this.zoneVariant(...args) }).apply(
        CustomTimeZone.createFromString.apply(
        null,
        [
            terminusArgs[0]
        ]
    ),
        [
        ]
    );
}
