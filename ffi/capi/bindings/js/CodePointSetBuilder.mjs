// generated by diplomat-tool
import { CodePointSetData } from "./CodePointSetData.mjs"
import wasm from "./diplomat-wasm.mjs";
import * as diplomatRuntime from "./diplomat-runtime.mjs";


/** See the [Rust documentation for `CodePointInversionListBuilder`](https://docs.rs/icu/latest/icu/collections/codepointinvlist/struct.CodePointInversionListBuilder.html) for more information.
*/

const CodePointSetBuilder_box_destroy_registry = new FinalizationRegistry((ptr) => {
    wasm.ICU4XCodePointSetBuilder_destroy(ptr);
});
export class CodePointSetBuilder {
    // Internal ptr reference:
    #ptr = null;

    // Lifetimes are only to keep dependencies alive.
    // Since JS won't garbage collect until there are no incoming edges.
    #selfEdge = [];
    
    
    constructor(ptr, selfEdge) {
        
        this.#ptr = ptr;
        this.#selfEdge = selfEdge;
        // Unconditionally register to destroy when this object is ready to garbage collect.
        CodePointSetBuilder_box_destroy_registry.register(this, this.#ptr);
    }

    get ffiValue() {
        return this.#ptr;
    }


    static create() {
        const result = wasm.ICU4XCodePointSetBuilder_create();
    
        try {
    
            return new CodePointSetBuilder(result, []);
        } finally {
        
        }
    }

    build() {
        const result = wasm.ICU4XCodePointSetBuilder_build(this.ffiValue);
    
        try {
    
            return new CodePointSetData(result, []);
        } finally {
        
        }
    }

    complement() {
        wasm.ICU4XCodePointSetBuilder_complement(this.ffiValue);
    
        try {
    
        } finally {
        
        }
    }

    get isEmpty() {
        const result = wasm.ICU4XCodePointSetBuilder_is_empty(this.ffiValue);
    
        try {
    
            return result;
        } finally {
        
        }
    }

    addChar(ch) {
        wasm.ICU4XCodePointSetBuilder_add_char(this.ffiValue, diplomatRuntime.extractCodePoint(ch, 'ch'));
    
        try {
    
        } finally {
        
        }
    }

    addInclusiveRange(start, end) {
        wasm.ICU4XCodePointSetBuilder_add_inclusive_range(this.ffiValue, diplomatRuntime.extractCodePoint(start, 'start'), diplomatRuntime.extractCodePoint(end, 'end'));
    
        try {
    
        } finally {
        
        }
    }

    addSet(data) {
        wasm.ICU4XCodePointSetBuilder_add_set(this.ffiValue, data.ffiValue);
    
        try {
    
        } finally {
        
        }
    }

    removeChar(ch) {
        wasm.ICU4XCodePointSetBuilder_remove_char(this.ffiValue, diplomatRuntime.extractCodePoint(ch, 'ch'));
    
        try {
    
        } finally {
        
        }
    }

    removeInclusiveRange(start, end) {
        wasm.ICU4XCodePointSetBuilder_remove_inclusive_range(this.ffiValue, diplomatRuntime.extractCodePoint(start, 'start'), diplomatRuntime.extractCodePoint(end, 'end'));
    
        try {
    
        } finally {
        
        }
    }

    removeSet(data) {
        wasm.ICU4XCodePointSetBuilder_remove_set(this.ffiValue, data.ffiValue);
    
        try {
    
        } finally {
        
        }
    }

    retainChar(ch) {
        wasm.ICU4XCodePointSetBuilder_retain_char(this.ffiValue, diplomatRuntime.extractCodePoint(ch, 'ch'));
    
        try {
    
        } finally {
        
        }
    }

    retainInclusiveRange(start, end) {
        wasm.ICU4XCodePointSetBuilder_retain_inclusive_range(this.ffiValue, diplomatRuntime.extractCodePoint(start, 'start'), diplomatRuntime.extractCodePoint(end, 'end'));
    
        try {
    
        } finally {
        
        }
    }

    retainSet(data) {
        wasm.ICU4XCodePointSetBuilder_retain_set(this.ffiValue, data.ffiValue);
    
        try {
    
        } finally {
        
        }
    }

    complementChar(ch) {
        wasm.ICU4XCodePointSetBuilder_complement_char(this.ffiValue, diplomatRuntime.extractCodePoint(ch, 'ch'));
    
        try {
    
        } finally {
        
        }
    }

    complementInclusiveRange(start, end) {
        wasm.ICU4XCodePointSetBuilder_complement_inclusive_range(this.ffiValue, diplomatRuntime.extractCodePoint(start, 'start'), diplomatRuntime.extractCodePoint(end, 'end'));
    
        try {
    
        } finally {
        
        }
    }

    complementSet(data) {
        wasm.ICU4XCodePointSetBuilder_complement_set(this.ffiValue, data.ffiValue);
    
        try {
    
        } finally {
        
        }
    }

    

}