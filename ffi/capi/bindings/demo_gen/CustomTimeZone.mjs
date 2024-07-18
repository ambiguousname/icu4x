import { CustomTimeZone } from "../CustomTimeZone.mjs"
export function timeZoneId() {
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
export function metazoneId() {
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
export function zoneVariant() {
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
