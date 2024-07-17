import { CaseMapper } from "../CaseMapper.mjs"
import { Locale } from "../Locale.mjs"

export function lowercase(provider, s, name) {
	var terminusArgs = arguments;
	return (function (...args) { return this.lowercase(...args) }).apply(
        CaseMapper.create.apply(
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
            )
        ]
    );
}
import { CaseMapper } from "../CaseMapper.mjs"
import { Locale } from "../Locale.mjs"

export function uppercase(provider, s, name) {
	var terminusArgs = arguments;
	return (function (...args) { return this.uppercase(...args) }).apply(
        CaseMapper.create.apply(
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
            )
        ]
    );
}
import { CaseMapper } from "../CaseMapper.mjs"
import { Locale } from "../Locale.mjs"
import { TitlecaseOptionsV1 } from "../TitlecaseOptionsV1.mjs"

export function titlecaseSegmentWithOnlyCaseDataV1(provider, s, name, leading_adjustment, trailing_case) {
	var terminusArgs = arguments;
	return (function (...args) { return this.titlecaseSegmentWithOnlyCaseDataV1(...args) }).apply(
        CaseMapper.create.apply(
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
import { CaseMapper } from "../CaseMapper.mjs"

export function fold(provider, s) {
	var terminusArgs = arguments;
	return (function (...args) { return this.fold(...args) }).apply(
        CaseMapper.create.apply(
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
import { CaseMapper } from "../CaseMapper.mjs"

export function foldTurkic(provider, s) {
	var terminusArgs = arguments;
	return (function (...args) { return this.foldTurkic(...args) }).apply(
        CaseMapper.create.apply(
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
