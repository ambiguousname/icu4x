// generated by diplomat-tool
import wasm from "./diplomat-wasm.mjs";
import * as diplomatRuntime from "./diplomat-runtime.mjs";

// Base enumerator definition
/** Additional information: [1](https://docs.rs/icu/latest/icu/provider/struct.DataError.html), [2](https://docs.rs/icu/latest/icu/provider/enum.DataErrorKind.html)
*/
export class DataError {
    #value = undefined;

    static values = new Map([
        ["Unknown", 0],
        ["MarkerNotFound", 1],
        ["IdentifierNotFound", 2],
        ["InvalidRequest", 3],
        ["InconsistentData", 4],
        ["Downcast", 5],
        ["Deserialize", 6],
        ["Custom", 7],
        ["Io", 8]
    ]);
    constructor(value) {
        if (value instanceof DataError) {
            this.#value = value.value;
            return;
        }

        if (DataError.values.has(value)) {
            this.#value = value;
            return;
        }

        throw TypeError(value + " is not a DataError and does not correspond to any of its enumerator values.");
    }

    get value() {
        return this.#value;
    }

    get ffiValue() {
        return DataError.values.get(this.#value);
    }

    static Unknown = new DataError("Unknown");

    static MarkerNotFound = new DataError("MarkerNotFound");

    static IdentifierNotFound = new DataError("IdentifierNotFound");

    static InvalidRequest = new DataError("InvalidRequest");

    static InconsistentData = new DataError("InconsistentData");

    static Downcast = new DataError("Downcast");

    static Deserialize = new DataError("Deserialize");

    static Custom = new DataError("Custom");

    static Io = new DataError("Io");


    

}