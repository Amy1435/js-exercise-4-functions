// //n1
const parola1 = prompt("Scrivi parola 1");
const parola2 = prompt("Scrivi parola 2");

function controlloLunghezza(elemento1, elemento2) {
    let length1 = elemento1.length;
    let length2 = elemento2.length;
    if (length1 === length2) {
        console.log(elemento1, elemento2);
    } else if (length1 < length2) {
        console.log(elemento2);
    } else {
        console.log(elemento1);
    }
}
controlloLunghezza(parola1, parola2);

// //n2
const parolaUtente = prompt("scrivi una parola");

function reverseString(parola) {
    let splitString = parola.split("");
    let reverseArray = splitString.reverse();
    let joinArray = reverseArray.join("");
    console.log(joinArray);
}

reverseString(parolaUtente);

// //n3
const frutta = ["mela", "pera", "banana"];
const numeri = [1, 2, 3];

function mergeAltV2(arr1, arr2) {
    const result = [];
    let switcher = true;
    for (let i = 0; i < arr1.length + arr2.length; i++) {
        if (switcher) {
            result.push(arr1[i / 2]);
        } else {
            result.push(arr2[(i - 1) / 2]);
        }
        switcher = !switcher;
    }
    return result;
}

console.log(mergeAltV2(frutta, numeri));
