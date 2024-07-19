import { ListFormatter } from "../ListFormatter.mjs"
import { Locale } from "../Locale.mjs"
export function format() {
	var terminusArgs = arguments;
	return (function (...args) { return args[0].format(...args.slice(1)) }).apply(
        null,
        [
            ListFormatter.createAndWithLength.apply(
                null,
                [
                    terminusArgs[0],
                    Locale.createFromString.apply(
                        null,
                        [
                            terminusArgs[1]
                        ]
                    ),
                    terminusArgs[2]
                ]
            ),
            terminusArgs[3]
        ]
    );
}
