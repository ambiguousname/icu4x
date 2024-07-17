import { Locale } from "../Locale.mjs"
import { RegionDisplayNames } from "../RegionDisplayNames.mjs"

export function of(provider, name, region) {
	var terminusArgs = arguments;
	return (function (...args) { return this.of(...args) }).apply(
        RegionDisplayNames.create.apply(
        null,
        [
            terminusArgs[0],
            Locale.createFromString.apply(
                null,
                [
                    terminusArgs[1]
                ]
            )
        ]
    ),
        [
            terminusArgs[2]
        ]
    );
}
