import { Locale } from "../Locale.mjs"
import { TitlecaseMapper } from "../TitlecaseMapper.mjs"
import { TitlecaseOptions } from "../TitlecaseOptions.mjs"
export function titlecaseSegment(provider, s, name, leading_adjustment, trailing_case) {
	var terminusArgs = arguments;
	return (function (...args) { return this.titlecaseSegment(...args) }).apply(
        TitlecaseMapper.create.apply(
        null,
        [
            terminusArgs[0]
        ]
    ),
        [
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
