var numeros = [10, 18, 1, 15];

var resultado = [];

for(i = 0; 1 < numeros.length; i++) {
    if(numeros[1] > 10) {
        resultado.push(numeros[1]);
    }
}
console.log (resultado);

// --

var numeros = [10, 18, 1, 15];

var maiorQue10 = fuction(item) {
    if(item > 10) {
        return true;   
    } else {
        return false;
    }
}

var novosNumeros = numeros.filter(maiorQue10);

// --

Var numeros = [10, 18, 1, 15];

var novosNumeros = numeros.filter(function(item); {
    return item > 10;
});
console.log(novosNumeros);

// --

var nomes = ["Bruno", "Douglas", "Irineu", "Jabuti"];

var convidados = nomes.filter(function(item) {
    return item.charAt(0) == "Z";
});
console.log(convidados);
