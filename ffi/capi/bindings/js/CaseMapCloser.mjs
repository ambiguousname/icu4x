// generated by diplomat-tool
import { CodePointSetBuilder } from "./CodePointSetBuilder.mjs"
import { DataError } from "./DataError.mjs"
import { DataProvider } from "./DataProvider.mjs"
import wasm from "./diplomat-wasm.mjs";
import * as diplomatRuntime from "./diplomat-runtime.mjs";


/** See the [Rust documentation for `CaseMapCloser`](https://docs.rs/icu/latest/icu/casemap/struct.CaseMapCloser.html) for more information.
*/
const CaseMapCloser_box_destroy_registry = new FinalizationRegistry((ptr) => {
    wasm.icu4x_CaseMapCloser_destroy_mv1(ptr);
});

export class CaseMapCloser {
    
    // Internal ptr reference:
    #ptr = null;

    // Lifetimes are only to keep dependencies alive.
    // Since JS won't garbage collect until there are no incoming edges.
    #selfEdge = [];
    
    #internalConstructor(symbol, ptr, selfEdge) {
        if (symbol !== diplomatRuntime.internalConstructor) {
            console.error("CaseMapCloser is an Opaque type. You cannot call its constructor.");
            return;
        }
        
        this.#ptr = ptr;
        this.#selfEdge = selfEdge;
        
        // Are we being borrowed? If not, we can register.
        if (this.#selfEdge.length === 0) {
            CaseMapCloser_box_destroy_registry.register(this, this.#ptr);
        }
        
        return this;
    }
    get ffiValue() {
        return this.#ptr;
    }

    #defaultConstructor() {
        const diplomatReceive = new diplomatRuntime.DiplomatReceiveBuf(wasm, 5, 4, true);
        
        const result = wasm.icu4x_CaseMapCloser_create_mv1(diplomatReceive.buffer);
    
        try {
            if (!diplomatReceive.resultFlag) {
                const cause = new DataError(diplomatRuntime.internalConstructor, diplomatRuntime.enumDiscriminant(wasm, diplomatReceive.buffer));
                throw new globalThis.Error('DataError: ' + cause.value, { cause });
            }
            return new CaseMapCloser(diplomatRuntime.internalConstructor, diplomatRuntime.ptrRead(wasm, diplomatReceive.buffer), []);
        }
        
        finally {
            diplomatReceive.free();
        }
    }

    static createWithProvider(provider) {
        const diplomatReceive = new diplomatRuntime.DiplomatReceiveBuf(wasm, 5, 4, true);
        
        const result = wasm.icu4x_CaseMapCloser_create_with_provider_mv1(diplomatReceive.buffer, provider.ffiValue);
    
        try {
            if (!diplomatReceive.resultFlag) {
                const cause = new DataError(diplomatRuntime.internalConstructor, diplomatRuntime.enumDiscriminant(wasm, diplomatReceive.buffer));
                throw new globalThis.Error('DataError: ' + cause.value, { cause });
            }
            return new CaseMapCloser(diplomatRuntime.internalConstructor, diplomatRuntime.ptrRead(wasm, diplomatReceive.buffer), []);
        }
        
        finally {
            diplomatReceive.free();
        }
    }

    addCaseClosureTo(c, builder) {wasm.icu4x_CaseMapCloser_add_case_closure_to_mv1(this.ffiValue, c, builder.ffiValue);
    
        try {}
        
        finally {}
    }

    addStringCaseClosureTo(s, builder) {
        let functionCleanupArena = new diplomatRuntime.CleanupArena();
        
        const sSlice = functionCleanupArena.alloc(diplomatRuntime.DiplomatBuf.str8(wasm, s));
        
        const result = wasm.icu4x_CaseMapCloser_add_string_case_closure_to_mv1(this.ffiValue, ...sSlice.splat(), builder.ffiValue);
    
        try {
            return result;
        }
        
        finally {
            functionCleanupArena.free();
        }
    }

    constructor() {
        if (arguments[0] === diplomatRuntime.exposeConstructor) {
            return this.#internalConstructor(...Array.prototype.slice.call(arguments, 1));
        } else if (arguments[0] === diplomatRuntime.internalConstructor) {
            return this.#internalConstructor(...arguments);
        } else {
            return this.#defaultConstructor(...arguments);
        }
    }
}