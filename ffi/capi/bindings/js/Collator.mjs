// generated by diplomat-tool
import { CollatorOptions } from "./CollatorOptions.mjs"
import { DataError } from "./DataError.mjs"
import { DataProvider } from "./DataProvider.mjs"
import { Locale } from "./Locale.mjs"
import { ResolvedCollatorOptions } from "./ResolvedCollatorOptions.mjs"
import wasm from "./diplomat-wasm.mjs";
import * as diplomatRuntime from "./diplomat-runtime.mjs";


/** See the [Rust documentation for `Collator`](https://docs.rs/icu/latest/icu/collator/struct.Collator.html) for more information.
*/

const Collator_box_destroy_registry = new FinalizationRegistry((ptr) => {
    wasm.ICU4XCollator_destroy(ptr);
});
export class Collator {
    // Internal ptr reference:
    #ptr = null;

    // Lifetimes are only to keep dependencies alive.
    // Since JS won't garbage collect until there are no incoming edges.
    #selfEdge = [];
    
    
    constructor(ptr, selfEdge) {
        
        this.#ptr = ptr;
        this.#selfEdge = selfEdge;
        // Unconditionally register to destroy when this object is ready to garbage collect.
        Collator_box_destroy_registry.register(this, this.#ptr);
    }

    get ffiValue() {
        return this.#ptr;
    }


    static create(provider, locale, options) {
        
        let slice_cleanup_callbacks = [];
        
        const diplomat_receive_buffer = wasm.diplomat_alloc(5, 4);
        const result = wasm.ICU4XCollator_create_v1(diplomat_receive_buffer, provider.ffiValue, locale.ffiValue, ...options._intoFFI(slice_cleanup_callbacks, {}));
    
        try {
    
            if (!diplomatRuntime.resultFlag(wasm, diplomat_receive_buffer, 4)) {
                const cause = DataError[Array.from(DataError.values.keys())[diplomatRuntime.enumDiscriminant(wasm, diplomat_receive_buffer)]];
                throw new Error('DataError: ' + cause.value, { cause });
            }
            return new Collator(diplomatRuntime.ptrRead(wasm, diplomat_receive_buffer), []);
        } finally {
        
            for (let cleanup of slice_cleanup_callbacks) {
                cleanup();
            }
        
            wasm.diplomat_free(diplomat_receive_buffer, 5, 4);
        
        }
    }

    compare(left, right) {
        
        const leftSlice = diplomatRuntime.DiplomatBuf.str16(wasm, left);
        
        const rightSlice = diplomatRuntime.DiplomatBuf.str16(wasm, right);
        const result = wasm.ICU4XCollator_compare_utf16(this.ffiValue, leftSlice.ptr, leftSlice.size, rightSlice.ptr, rightSlice.size);
    
        try {
    
            return result;
        } finally {
        
            leftSlice.free();
        
            rightSlice.free();
        
        }
    }

    get resolvedOptions() {
        
        const diplomat_receive_buffer = wasm.diplomat_alloc(28, 4);
        const result = wasm.ICU4XCollator_resolved_options(diplomat_receive_buffer, this.ffiValue);
    
        try {
    
            return new ResolvedCollatorOptions(diplomat_receive_buffer);
        } finally {
        
            wasm.diplomat_free(diplomat_receive_buffer, 28, 4);
        
        }
    }

    

}