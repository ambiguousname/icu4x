// generated by diplomat-tool
import { DataError } from "./DataError.mjs"
import { DataProvider } from "./DataProvider.mjs"
import { MeasureUnit } from "./MeasureUnit.mjs"
import { MeasureUnitParser } from "./MeasureUnitParser.mjs"
import { UnitsConverter } from "./UnitsConverter.mjs"
import wasm from "./diplomat-wasm.mjs";
import * as diplomatRuntime from "./diplomat-runtime.mjs";


/** An ICU4X Units Converter Factory object, capable of creating converters a [`UnitsConverter`]
*for converting between two [`MeasureUnit`]s.
*Also, it can parse the CLDR unit identifier (e.g. `meter-per-square-second`) and get the [`MeasureUnit`].
*
*See the [Rust documentation for `ConverterFactory`](https://docs.rs/icu/latest/icu/experimental/units/converter_factory/struct.ConverterFactory.html) for more information.
*/

const UnitsConverterFactory_box_destroy_registry = new FinalizationRegistry((ptr) => {
    wasm.ICU4XUnitsConverterFactory_destroy(ptr);
});
export class UnitsConverterFactory {
    // Internal ptr reference:
    #ptr = null;

    // Lifetimes are only to keep dependencies alive.
    // Since JS won't garbage collect until there are no incoming edges.
    #selfEdge = [];
    
    
    constructor(ptr, selfEdge) {
        
        this.#ptr = ptr;
        this.#selfEdge = selfEdge;
        // Unconditionally register to destroy when this object is ready to garbage collect.
        UnitsConverterFactory_box_destroy_registry.register(this, this.#ptr);
    }

    get ffiValue() {
        return this.#ptr;
    }


    static create(provider) {
        
        const diplomat_receive_buffer = wasm.diplomat_alloc(5, 4);
        const result = wasm.ICU4XUnitsConverterFactory_create(diplomat_receive_buffer, provider.ffiValue);
    
        try {
    
            if (!diplomatRuntime.resultFlag(wasm, diplomat_receive_buffer, 4)) {
                const cause = DataError[Array.from(DataError.values.keys())[diplomatRuntime.enumDiscriminant(wasm, diplomat_receive_buffer)]];
                throw new Error('DataError: ' + cause.value, { cause });
            }
            return new UnitsConverterFactory(diplomatRuntime.ptrRead(wasm, diplomat_receive_buffer), []);
        } finally {
        
            wasm.diplomat_free(diplomat_receive_buffer, 5, 4);
        
        }
    }

    converter(from, to) {
        const result = wasm.ICU4XUnitsConverterFactory_converter(this.ffiValue, from.ffiValue, to.ffiValue);
    
        try {
    
            return result == 0 ? null : new UnitsConverter(result, []);
        } finally {
        
        }
    }

    parser() {
        
        // This lifetime edge depends on lifetimes 'a
        let aEdges = [this];
        const result = wasm.ICU4XUnitsConverterFactory_parser(this.ffiValue);
    
        try {
    
            return new MeasureUnitParser(result, [], aEdges);
        } finally {
        
        }
    }

    

}