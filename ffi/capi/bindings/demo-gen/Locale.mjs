import { Locale } from "../Locale.mjs"
export function basename() {
	var terminusArgs = arguments;
	return (function (...args) { return this.basename(...args) }).apply(
        Locale.createFromString.apply(
        null,
        [
            terminusArgs[0]
        ]
    ),
        [
        ]
    );
}
export function getUnicodeExtension() {
	var terminusArgs = arguments;
	return (function (...args) { return this.getUnicodeExtension(...args) }).apply(
        Locale.createFromString.apply(
        null,
        [
            terminusArgs[0]
        ]
    ),
        [
            terminusArgs[1]
        ]
    );
}
export function language() {
	var terminusArgs = arguments;
	return (function (...args) { return this.language(...args) }).apply(
        Locale.createFromString.apply(
        null,
        [
            terminusArgs[0]
        ]
    ),
        [
        ]
    );
}
export function region() {
	var terminusArgs = arguments;
	return (function (...args) { return this.region(...args) }).apply(
        Locale.createFromString.apply(
        null,
        [
            terminusArgs[0]
        ]
    ),
        [
        ]
    );
}
export function script() {
	var terminusArgs = arguments;
	return (function (...args) { return this.script(...args) }).apply(
        Locale.createFromString.apply(
        null,
        [
            terminusArgs[0]
        ]
    ),
        [
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
	return (function (...args) { return this.toString(...args) }).apply(
        Locale.createFromString.apply(
        null,
        [
            terminusArgs[0]
        ]
    ),
        [
        ]
    );
}
