import { CaseMapper } from "../CaseMapper.mjs"
import { Locale } from "../Locale.mjs"
import { TitlecaseOptions } from "../TitlecaseOptions.mjs"
export function lowercase() {
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
export function uppercase() {
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
export function titlecaseSegmentWithOnlyCaseData() {
	var terminusArgs = arguments;
	return (function (...args) { return this.titlecaseSegmentWithOnlyCaseData(...args) }).apply(
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
export function fold() {
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
export function foldTurkic() {
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
