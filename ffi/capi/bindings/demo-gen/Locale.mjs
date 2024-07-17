import { Locale } from "../Locale.mjs"
export function basename(name) {
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
export function getUnicodeExtension(name, s) {
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
export function language(name) {
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
export function region(name) {
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
export function script(name) {
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
export function canonicalize(s) {
	var terminusArgs = arguments;
	return Locale.canonicalize.apply(
        null,
        [
            terminusArgs[0]
        ]
    );
}
export function toString(name) {
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
