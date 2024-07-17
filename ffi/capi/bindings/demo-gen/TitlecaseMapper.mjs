import { Locale } from "../Locale.mjs"
import { TitlecaseMapper } from "../TitlecaseMapper.mjs"
import { TitlecaseOptionsV1 } from "../TitlecaseOptionsV1.mjs"

export function titlecaseSegmentV1(provider, s, name, leading_adjustment, trailing_case) {
	var terminusArgs = arguments;
	return (function (...args) { return this.titlecaseSegmentV1(...args) }).apply(
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
            	let out = new TitlecaseOptionsV1();
            	
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
