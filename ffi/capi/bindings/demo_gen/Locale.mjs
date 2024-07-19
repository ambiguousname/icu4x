import { Locale } from "../Locale.mjs"
export function basename() {
	var terminusArgs = arguments;
	return (function (...args) { return args[0].basename(...args.slice(1)) }).apply(
        null,
        [
            Locale.createFromString.apply(
                null,
                [
                    terminusArgs[0]
                ]
            )
        ]
    );
}
export function getUnicodeExtension() {
	var terminusArgs = arguments;
	return (function (...args) { return args[0].getUnicodeExtension(...args.slice(1)) }).apply(
        null,
        [
            Locale.createFromString.apply(
                null,
                [
                    terminusArgs[0]
                ]
            ),
            terminusArgs[1]
        ]
    );
}
export function language() {
	var terminusArgs = arguments;
	return (function (...args) { return args[0].language(...args.slice(1)) }).apply(
        null,
        [
            Locale.createFromString.apply(
                null,
                [
                    terminusArgs[0]
                ]
            )
        ]
    );
}
export function region() {
	var terminusArgs = arguments;
	return (function (...args) { return args[0].region(...args.slice(1)) }).apply(
        null,
        [
            Locale.createFromString.apply(
                null,
                [
                    terminusArgs[0]
                ]
            )
        ]
    );
}
export function script() {
	var terminusArgs = arguments;
	return (function (...args) { return args[0].script(...args.slice(1)) }).apply(
        null,
        [
            Locale.createFromString.apply(
                null,
                [
                    terminusArgs[0]
                ]
            )
        ]
    );
}
export function canonicalize() {
	var terminusArgs = arguments;
	return Locale.canonicalize.apply(
        null,
        [
            terminusArgs[0]
        ]
    );
}
export function toString() {
	var terminusArgs = arguments;
	return (function (...args) { return args[0].toString(...args.slice(1)) }).apply(
        null,
        [
            Locale.createFromString.apply(
                null,
                [
                    terminusArgs[0]
                ]
            )
        ]
    );
}
