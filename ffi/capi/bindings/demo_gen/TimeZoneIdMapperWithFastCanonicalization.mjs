import { TimeZoneIdMapperWithFastCanonicalization } from "../TimeZoneIdMapperWithFastCanonicalization.mjs"
export function canonicalizeIana() {
	var terminusArgs = arguments;
	return (function (...args) { return args[0].canonicalizeIana }).apply(
        null,
        [
            TimeZoneIdMapperWithFastCanonicalization.create.apply(
                null,
                [
                    terminusArgs[0]
                ]
            ),
            terminusArgs[1]
        ]
    );
}
export function canonicalIanaFromBcp47() {
	var terminusArgs = arguments;
	return (function (...args) { return args[0].canonicalIanaFromBcp47 }).apply(
        null,
        [
            TimeZoneIdMapperWithFastCanonicalization.create.apply(
                null,
                [
                    terminusArgs[0]
                ]
            ),
            terminusArgs[1]
        ]
    );
}
