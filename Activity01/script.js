function somar() {
    var numero1 = document.getElementById("soma1").valueAsNumber;
    var numero2 = document.getElementById("soma2").valueAsNumber;
    var resultado = numero1 + numero2;
   document.getElementById("resultadosoma").textContent = resultado.toFixed(2);
}

function sub() {
    var numero1 = document.getElementById("sub1").valueAsNumber;
    var numero2 = document.getElementById("sub2").valueAsNumber;
    var resultado = numero1 - numero2;
    document.getElementById("resultadosub").textContent = resultado.toFixed(2);
}

function mul() {
    var numero1 = document.getElementById("mul1").valueAsNumber;
    var numero2 = document.getElementById("mul2").valueAsNumber;
    var resultado = numero1 * numero2;
    document.getElementById("resultadomul").textContent = resultado.toFixed(2);
}

function div() {
    var numero1 = document.getElementById("div1").valueAsNumber;
    var numero2 = document.getElementById("div2").valueAsNumber;
    var resultado = numero1 / numero2;
    document.getElementById("resultadodiv").textContent = resultado.toFixed(2);
}