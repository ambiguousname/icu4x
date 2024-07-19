import { TimeZoneIdMapper } from "../TimeZoneIdMapper.mjs"
export function ianaToBcp47() {
	var terminusArgs = arguments;
	return (function (...args) { return args[0].ianaToBcp47(...args.slice(1)) }).apply(
        null,
        [
            TimeZoneIdMapper.create.apply(
                null,
                [
                    terminusArgs[0]
                ]
            ),
            terminusArgs[1]
        ]
    );
}
export function normalizeIana() {
	var terminusArgs = arguments;
	return (function (...args) { return args[0].normalizeIana(...args.slice(1)) }).apply(
        null,
        [
            TimeZoneIdMapper.create.apply(
                null,
                [
                    terminusArgs[0]
                ]
            ),
            terminusArgs[1]
        ]
    );
}
export function canonicalizeIana() {
	var terminusArgs = arguments;
	return (function (...args) { return args[0].canonicalizeIana(...args.slice(1)) }).apply(
        null,
        [
            TimeZoneIdMapper.create.apply(
                null,
                [
                    terminusArgs[0]
                ]
            ),
            terminusArgs[1]
        ]
    );
}
export function findCanonicalIanaFromBcp47() {
	var terminusArgs = arguments;
	return (function (...args) { return args[0].findCanonicalIanaFromBcp47(...args.slice(1)) }).apply(
        null,
        [
            TimeZoneIdMapper.create.apply(
                null,
                [
                    terminusArgs[0]
                ]
            ),
            terminusArgs[1]
        ]
    );
}
