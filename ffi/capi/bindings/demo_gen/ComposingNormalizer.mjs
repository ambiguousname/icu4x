import { ComposingNormalizer } from "../ComposingNormalizer.mjs"
export function normalize() {
	var terminusArgs = arguments;
	return (function (...args) { return args[0].normalize }).apply(
        null,
        [
            ComposingNormalizer.createNfc.apply(
                null,
                [
                    terminusArgs[0]
                ]
            ),
            terminusArgs[1]
        ]
    );
}
