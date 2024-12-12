declare namespace isWellKnownSymbol {
    type WellKnownSymbolName = Exclude<
        keyof SymbolConstructor,
        | 'constructor'
        | 'for'
        | 'from'
        | 'keyFor'
        | 'prototype'
    >;

    type WellKnownSymbol = SymbolConstructor[WellKnownSymbolName];
}

declare function isWellKnownSymbol(sym: unknown): sym is isWellKnownSymbol.WellKnownSymbol;

export = isWellKnownSymbol;