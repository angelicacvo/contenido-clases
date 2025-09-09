// Ejercicio de lógica (JS -> logic.js)
let str = "angelica".toLowerCase();

// contar frecuencias
let counts = {};
for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (counts[char] === undefined) {
        counts[char] = 1;
    } else {
        counts[char]++;
    }
}

// construir una lista de carácter, frecuencia
let unique = [];
let index = 0;

for (let char in counts) {
    unique[index] = [char, counts[char]];
    index++;
}

// bubble sort (llevar los resultados en order desc y luego alfabético asc
let n = unique.length;
// n-1 recorridos porque en la última pasada ya estaría ordenado.
for (let i = 0; i < n - 1; i++) {
    // n - i - 1 se pone porque en cada pasada el último elemento ya queda en su lugar correcto 
    // así que no hace falta volver a revisarlo.
    for (let j = 0; j < n - i - 1; j++) {
        let a = unique[j];
        let b = unique[j + 1];

        if (
            a[1] < b[1] ||
            (a[1] === b[1] && a[0] > b[0])
        ) {
            // dos elementos están en el orden incorrecto, toca intercambiarlos de lugar en el arreglo unique
            let temp = unique[j];
            unique[j] = unique[j + 1];
            unique[j + 1] = temp;
        }
    }
}

// hacer una cadena(string) con el resultado
let result = "";
for (let i = 0; i < n; i++) {
    let char = unique[i][0];
    let freq = unique[i][1];
    for (let k = 0; k < freq; k++) {
        result += char;
    }
}

console.log(result);