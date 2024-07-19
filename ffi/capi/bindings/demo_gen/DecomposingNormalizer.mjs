import { DecomposingNormalizer } from "../DecomposingNormalizer.mjs"
export function normalize() {
	var terminusArgs = arguments;
	return (function (...args) { return args[0].normalize(...args.slice(1)) }).apply(
        null,
        [
            DecomposingNormalizer.createNfd.apply(
                null,
                [
                    terminusArgs[0]
                ]
            ),
            terminusArgs[1]
        ]
    );
}
