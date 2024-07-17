import { ComposingNormalizer } from "../ComposingNormalizer.mjs"
export function normalize() {
	var terminusArgs = arguments;
	return (function (...args) { return this.normalize(...args) }).apply(
        ComposingNormalizer.createNfc.apply(
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
