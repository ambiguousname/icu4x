import { TimeZoneIdMapperWithFastCanonicalization } from "../TimeZoneIdMapperWithFastCanonicalization.mjs"
export function canonicalizeIana() {
	var terminusArgs = arguments;
	return (function (...args) { return this.canonicalizeIana(...args) }).apply(
        TimeZoneIdMapperWithFastCanonicalization.create.apply(
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
export function canonicalIanaFromBcp47() {
	var terminusArgs = arguments;
	return (function (...args) { return this.canonicalIanaFromBcp47(...args) }).apply(
        TimeZoneIdMapperWithFastCanonicalization.create.apply(
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
