// place files you want to import through the `$lib` alias in this folder.
export function read8BitUnsigned(n) {
    return n % 256;
}

export function read16BitSigned(n) {
    if (n < 32768) {
        return n;
    } else {
        return n - 65536;
    }
}

export function read32BitUnsigned(a, b) {
    return ((b << 16) >>> 0) | a;
}

export function read32BitSigned(a, b) {
    return (b << 16) | a;
}

export function readInverterModel(n) {
    let models = {
        3: 'X1 Hybrid G3',
        4: 'X1 Boost Air Mini',
        5: 'X3 Hybrid G1',
        6: 'X3 20K-30K',
        7: 'X3 MIC',
        8: 'X1 Boost Pro',
        9: 'X1 AC',
        10: 'A1 Hybrid',
        11: 'A1 Hybrid',
        12: 'A1 Hybrid',
        13: 'j1ess',
        14: 'X3 Hybrid G4',
        15: 'X1 Hybrid G4',
        16: 'X3 MIC Pro G2',
        17: 'X1 Hybrid Split G4',
        18: 'X1 Boost Mini G4',
        19: 'A1 Hybrid G2',
        20: 'A1 Hybrid G2',
        21: 'A1 Hybrid G2',
        22: 'X1 Boost Mini G4',
        23: 'X1 Hybrid G5',
        24: 'X3 Hybrid G5',
        100: 'X3 Big',
        101: 'X3 Big',
        102: 'X1 Hybrid LV',
    }

    return models[n];
}