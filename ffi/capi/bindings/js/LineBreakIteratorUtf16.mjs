// generated by diplomat-tool
import wasm from "./diplomat-wasm.mjs";
import * as diplomatRuntime from "./diplomat-runtime.mjs";


/** See the [Rust documentation for `LineBreakIterator`](https://docs.rs/icu/latest/icu/segmenter/struct.LineBreakIterator.html) for more information.
*
*Additional information: [1](https://docs.rs/icu/latest/icu/segmenter/type.LineBreakIteratorUtf16.html)
*/

const LineBreakIteratorUtf16_box_destroy_registry = new FinalizationRegistry((ptr) => {
    wasm.ICU4XLineBreakIteratorUtf16_destroy(ptr);
});
export class LineBreakIteratorUtf16 {
    // Internal ptr reference:
    #ptr = null;

    // Lifetimes are only to keep dependencies alive.
    // Since JS won't garbage collect until there are no incoming edges.
    #selfEdge = [];
    
    #aEdge = [];
    
    
    constructor(ptr, selfEdge, aEdge) {
        
        
        this.#aEdge = aEdge;
        
        this.#ptr = ptr;
        this.#selfEdge = selfEdge;
        // Unconditionally register to destroy when this object is ready to garbage collect.
        LineBreakIteratorUtf16_box_destroy_registry.register(this, this.#ptr);
    }

    get ffiValue() {
        return this.#ptr;
    }


    next() {
        const result = wasm.ICU4XLineBreakIteratorUtf16_next(this.ffiValue);
    
        try {
    
            return result;
        } finally {
        
        }
    }

    

}