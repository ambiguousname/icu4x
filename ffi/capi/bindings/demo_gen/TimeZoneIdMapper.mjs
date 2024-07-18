import { TimeZoneIdMapper } from "../TimeZoneIdMapper.mjs"
export function ianaToBcp47() {
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
export function normalizeIana() {
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
export function canonicalizeIana() {
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
export function findCanonicalIanaFromBcp47() {
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
