import { Locale } from "../Locale.mjs"
import { TitlecaseMapper } from "../TitlecaseMapper.mjs"
import { TitlecaseOptions } from "../TitlecaseOptions.mjs"
export function titlecaseSegment() {
	var terminusArgs = arguments;
	return (function (...args) { return args[0].titlecaseSegment(...args.slice(1)) }).apply(
        null,
        [
            TitlecaseMapper.create.apply(
                null,
                [
                    terminusArgs[0]
                ]
            ),
            terminusArgs[1],
            Locale.createFromString.apply(
                null,
                [
                    terminusArgs[2]
                ]
            ),
            (function (...args) {
            	let out = new TitlecaseOptions();
            	
            	out.leadingAdjustment = args[0];
            	
            	out.trailingCase = args[1];
            	
            	return out;
            }).apply(
                null,
                [
                    terminusArgs[3],
                    terminusArgs[4]
                ]
            )
        ]
    );
}
