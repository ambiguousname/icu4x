import { DecomposingNormalizer } from "../DecomposingNormalizer.mjs"

export function normalize(provider, s) {
	var terminusArgs = arguments;
	return (function (...args) { return this.normalize(...args) }).apply(
        DecomposingNormalizer.createNfd.apply(
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
