// generated by diplomat-tool
import { LocaleParseError } from "./LocaleParseError.mjs"
import wasm from "./diplomat-wasm.mjs";
import * as diplomatRuntime from "./diplomat-runtime.mjs";


/** An ICU4X Locale, capable of representing strings like `"en-US"`.
*
*See the [Rust documentation for `Locale`](https://docs.rs/icu/latest/icu/locale/struct.Locale.html) for more information.
*/

const Locale_box_destroy_registry = new FinalizationRegistry((ptr) => {
    wasm.ICU4XLocale_destroy(ptr);
});
export class Locale {
    // Internal ptr reference:
    #ptr = null;

    // Lifetimes are only to keep dependencies alive.
    // Since JS won't garbage collect until there are no incoming edges.
    #selfEdge = [];
    
    
    constructor(ptr, selfEdge) {
        
        this.#ptr = ptr;
        this.#selfEdge = selfEdge;
        // Unconditionally register to destroy when this object is ready to garbage collect.
        Locale_box_destroy_registry.register(this, this.#ptr);
    }

    get ffiValue() {
        return this.#ptr;
    }


    static createFromString(name) {
        
        const nameSlice = diplomatRuntime.DiplomatBuf.str8(wasm, name);
        
        const diplomat_receive_buffer = wasm.diplomat_alloc(5, 4);
        const result = wasm.ICU4XLocale_create_from_string(diplomat_receive_buffer, nameSlice.ptr, nameSlice.size);
    
        try {
    
            if (!diplomatRuntime.resultFlag(wasm, diplomat_receive_buffer, 4)) {
                const cause = LocaleParseError[Array.from(LocaleParseError.values.keys())[diplomatRuntime.enumDiscriminant(wasm, diplomat_receive_buffer)]];
                throw new Error('LocaleParseError: ' + cause.value, { cause });
            }
            return new Locale(diplomatRuntime.ptrRead(wasm, diplomat_receive_buffer), []);
        } finally {
        
            nameSlice.free();
        
            wasm.diplomat_free(diplomat_receive_buffer, 5, 4);
        
        }
    }

    static createUnd() {
        const result = wasm.ICU4XLocale_create_und();
    
        try {
    
            return new Locale(result, []);
        } finally {
        
        }
    }

    clone() {
        const result = wasm.ICU4XLocale_clone(this.ffiValue);
    
        try {
    
            return new Locale(result, []);
        } finally {
        
        }
    }

    get basename() {
        
        const write = wasm.diplomat_buffer_write_create(0);
        wasm.ICU4XLocale_basename(this.ffiValue, write);
    
        try {
    
            return diplomatRuntime.readString8(wasm, wasm.diplomat_buffer_write_get_bytes(write), wasm.diplomat_buffer_write_len(write));
        } finally {
        
            wasm.diplomat_buffer_write_destroy(write);
        
        }
    }

    getUnicodeExtension(s) {
        
        const sSlice = diplomatRuntime.DiplomatBuf.str8(wasm, s);
        
        const write = wasm.diplomat_buffer_write_create(0);
        const result = wasm.ICU4XLocale_get_unicode_extension(this.ffiValue, sSlice.ptr, sSlice.size, write);
    
        try {
    
            return result == 0 ? null : diplomatRuntime.readString8(wasm, wasm.diplomat_buffer_write_get_bytes(write), wasm.diplomat_buffer_write_len(write));
        } finally {
        
            sSlice.free();
        
            wasm.diplomat_buffer_write_destroy(write);
        
        }
    }

    get language() {
        
        const write = wasm.diplomat_buffer_write_create(0);
        wasm.ICU4XLocale_language(this.ffiValue, write);
    
        try {
    
            return diplomatRuntime.readString8(wasm, wasm.diplomat_buffer_write_get_bytes(write), wasm.diplomat_buffer_write_len(write));
        } finally {
        
            wasm.diplomat_buffer_write_destroy(write);
        
        }
    }

    set language(s) {
        
        const sSlice = diplomatRuntime.DiplomatBuf.str8(wasm, s);
        
        const diplomat_receive_buffer = wasm.diplomat_alloc(5, 4);
        const result = wasm.ICU4XLocale_set_language(diplomat_receive_buffer, this.ffiValue, sSlice.ptr, sSlice.size);
    
        try {
    
            if (!diplomatRuntime.resultFlag(wasm, diplomat_receive_buffer, 4)) {
                const cause = LocaleParseError[Array.from(LocaleParseError.values.keys())[diplomatRuntime.enumDiscriminant(wasm, diplomat_receive_buffer)]];
                throw new Error('LocaleParseError: ' + cause.value, { cause });
            }
    
        } finally {
        
            sSlice.free();
        
            wasm.diplomat_free(diplomat_receive_buffer, 5, 4);
        
        }
    }

    get region() {
        
        const write = wasm.diplomat_buffer_write_create(0);
        const result = wasm.ICU4XLocale_region(this.ffiValue, write);
    
        try {
    
            return result == 0 ? null : diplomatRuntime.readString8(wasm, wasm.diplomat_buffer_write_get_bytes(write), wasm.diplomat_buffer_write_len(write));
        } finally {
        
            wasm.diplomat_buffer_write_destroy(write);
        
        }
    }

    set region(s) {
        
        const sSlice = diplomatRuntime.DiplomatBuf.str8(wasm, s);
        
        const diplomat_receive_buffer = wasm.diplomat_alloc(5, 4);
        const result = wasm.ICU4XLocale_set_region(diplomat_receive_buffer, this.ffiValue, sSlice.ptr, sSlice.size);
    
        try {
    
            if (!diplomatRuntime.resultFlag(wasm, diplomat_receive_buffer, 4)) {
                const cause = LocaleParseError[Array.from(LocaleParseError.values.keys())[diplomatRuntime.enumDiscriminant(wasm, diplomat_receive_buffer)]];
                throw new Error('LocaleParseError: ' + cause.value, { cause });
            }
    
        } finally {
        
            sSlice.free();
        
            wasm.diplomat_free(diplomat_receive_buffer, 5, 4);
        
        }
    }

    get script() {
        
        const write = wasm.diplomat_buffer_write_create(0);
        const result = wasm.ICU4XLocale_script(this.ffiValue, write);
    
        try {
    
            return result == 0 ? null : diplomatRuntime.readString8(wasm, wasm.diplomat_buffer_write_get_bytes(write), wasm.diplomat_buffer_write_len(write));
        } finally {
        
            wasm.diplomat_buffer_write_destroy(write);
        
        }
    }

    set script(s) {
        
        const sSlice = diplomatRuntime.DiplomatBuf.str8(wasm, s);
        
        const diplomat_receive_buffer = wasm.diplomat_alloc(5, 4);
        const result = wasm.ICU4XLocale_set_script(diplomat_receive_buffer, this.ffiValue, sSlice.ptr, sSlice.size);
    
        try {
    
            if (!diplomatRuntime.resultFlag(wasm, diplomat_receive_buffer, 4)) {
                const cause = LocaleParseError[Array.from(LocaleParseError.values.keys())[diplomatRuntime.enumDiscriminant(wasm, diplomat_receive_buffer)]];
                throw new Error('LocaleParseError: ' + cause.value, { cause });
            }
    
        } finally {
        
            sSlice.free();
        
            wasm.diplomat_free(diplomat_receive_buffer, 5, 4);
        
        }
    }

    static canonicalize(s) {
        
        const sSlice = diplomatRuntime.DiplomatBuf.str8(wasm, s);
        
        const diplomat_receive_buffer = wasm.diplomat_alloc(5, 4);
        
        const write = wasm.diplomat_buffer_write_create(0);
        const result = wasm.ICU4XLocale_canonicalize(diplomat_receive_buffer, sSlice.ptr, sSlice.size, write);
    
        try {
    
            if (!diplomatRuntime.resultFlag(wasm, diplomat_receive_buffer, 4)) {
                const cause = LocaleParseError[Array.from(LocaleParseError.values.keys())[diplomatRuntime.enumDiscriminant(wasm, diplomat_receive_buffer)]];
                throw new Error('LocaleParseError: ' + cause.value, { cause });
            }
            return diplomatRuntime.readString8(wasm, wasm.diplomat_buffer_write_get_bytes(write), wasm.diplomat_buffer_write_len(write));
        } finally {
        
            sSlice.free();
        
            wasm.diplomat_free(diplomat_receive_buffer, 5, 4);
        
            wasm.diplomat_buffer_write_destroy(write);
        
        }
    }

    toString() {
        
        const write = wasm.diplomat_buffer_write_create(0);
        wasm.ICU4XLocale_to_string(this.ffiValue, write);
    
        try {
    
            return diplomatRuntime.readString8(wasm, wasm.diplomat_buffer_write_get_bytes(write), wasm.diplomat_buffer_write_len(write));
        } finally {
        
            wasm.diplomat_buffer_write_destroy(write);
        
        }
    }

    normalizingEq(other) {
        
        const otherSlice = diplomatRuntime.DiplomatBuf.str8(wasm, other);
        const result = wasm.ICU4XLocale_normalizing_eq(this.ffiValue, otherSlice.ptr, otherSlice.size);
    
        try {
    
            return result;
        } finally {
        
            otherSlice.free();
        
        }
    }

    compareToString(other) {
        
        const otherSlice = diplomatRuntime.DiplomatBuf.str8(wasm, other);
        const result = wasm.ICU4XLocale_compare_to_string(this.ffiValue, otherSlice.ptr, otherSlice.size);
    
        try {
    
            return result;
        } finally {
        
            otherSlice.free();
        
        }
    }

    compareTo(other) {
        const result = wasm.ICU4XLocale_compare_to(this.ffiValue, other.ffiValue);
    
        try {
    
            return result;
        } finally {
        
        }
    }

    

}