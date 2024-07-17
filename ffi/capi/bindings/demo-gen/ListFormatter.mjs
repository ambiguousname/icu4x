import { ListFormatter } from "../ListFormatter.mjs"
import { Locale } from "../Locale.mjs"

export function formatValidUtf8(provider, name, length, list) {
	var terminusArgs = arguments;
	return (function (...args) { return this.formatValidUtf8(...args) }).apply(
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
        [
            terminusArgs[3]
        ]
    );
}
import { ListFormatter } from "../ListFormatter.mjs"
import { Locale } from "../Locale.mjs"

export function formatUtf8(provider, name, length, list) {
	var terminusArgs = arguments;
	return (function (...args) { return this.formatUtf8(...args) }).apply(
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
        [
            terminusArgs[3]
        ]
    );
}
import { ListFormatter } from "../ListFormatter.mjs"
import { Locale } from "../Locale.mjs"

export function formatUtf16(provider, name, length, list) {
	var terminusArgs = arguments;
	return (function (...args) { return this.formatUtf16(...args) }).apply(
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
        [
            terminusArgs[3]
        ]
    );
}
