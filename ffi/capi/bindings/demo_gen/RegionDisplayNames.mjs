import { Locale } from "../Locale.mjs"
import { RegionDisplayNames } from "../RegionDisplayNames.mjs"
export function of() {
	var terminusArgs = arguments;
	return (function (...args) { return args[0].of(...args.slice(1)) }).apply(
        null,
        [
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
            terminusArgs[2]
        ]
    );
}
