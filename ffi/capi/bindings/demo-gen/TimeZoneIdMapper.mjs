import { TimeZoneIdMapper } from "../TimeZoneIdMapper.mjs"
export function ianaToBcp47(provider, value) {
	var terminusArgs = arguments;
	return (function (...args) { return this.ianaToBcp47(...args) }).apply(
        TimeZoneIdMapper.create.apply(
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
export function normalizeIana(provider, value) {
	var terminusArgs = arguments;
	return (function (...args) { return this.normalizeIana(...args) }).apply(
        TimeZoneIdMapper.create.apply(
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
export function canonicalizeIana(provider, value) {
	var terminusArgs = arguments;
	return (function (...args) { return this.canonicalizeIana(...args) }).apply(
        TimeZoneIdMapper.create.apply(
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
export function findCanonicalIanaFromBcp47(provider, value) {
	var terminusArgs = arguments;
	return (function (...args) { return this.findCanonicalIanaFromBcp47(...args) }).apply(
        TimeZoneIdMapper.create.apply(
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
