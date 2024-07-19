import { DisplayNamesOptions } from "../DisplayNamesOptions.mjs"
import { Locale } from "../Locale.mjs"
import { LocaleDisplayNamesFormatter } from "../LocaleDisplayNamesFormatter.mjs"
export function of() {
	var terminusArgs = arguments;
	return (function (...args) { return args[0].of(...args.slice(1)) }).apply(
        null,
        [
            LocaleDisplayNamesFormatter.create.apply(
                null,
                [
                    terminusArgs[0],
                    Locale.createFromString.apply(
                        null,
                        [
                            terminusArgs[1]
                        ]
                    ),
                    (function (...args) {
                    	let out = new DisplayNamesOptions();
                    	
                    	out.style = args[0];
                    	
                    	out.fallback = args[1];
                    	
                    	out.languageDisplay = args[2];
                    	
                    	return out;
                    }).apply(
                        null,
                        [
                            terminusArgs[2],
                            terminusArgs[3],
                            terminusArgs[4]
                        ]
                    )
                ]
            ),
            Locale.createFromString.apply(
                null,
                [
                    terminusArgs[5]
                ]
            )
        ]
    );
}
