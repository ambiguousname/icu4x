import { CustomTimeZone } from "../CustomTimeZone.mjs"
export function timeZoneId() {
	var terminusArgs = arguments;
	return (function (...args) { return args[0].timeZoneId(...args.slice(1)) }).apply(
        null,
        [
            CustomTimeZone.createFromString.apply(
                null,
                [
                    terminusArgs[0]
                ]
            )
        ]
    );
}
export function metazoneId() {
	var terminusArgs = arguments;
	return (function (...args) { return args[0].metazoneId(...args.slice(1)) }).apply(
        null,
        [
            CustomTimeZone.createFromString.apply(
                null,
                [
                    terminusArgs[0]
                ]
            )
        ]
    );
}
export function zoneVariant() {
	var terminusArgs = arguments;
	return (function (...args) { return args[0].zoneVariant(...args.slice(1)) }).apply(
        null,
        [
            CustomTimeZone.createFromString.apply(
                null,
                [
                    terminusArgs[0]
                ]
            )
        ]
    );
}
