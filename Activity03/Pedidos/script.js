function comecar(){
    var nome = document.getElementById("exampleFormControlInput1").value;
     show(nome);
}

function show(nome){
    document.getElementById("nomePrint").textContent = nome;
    var div = document.getElementById("selects-div");
    if(nome && nome.trim() !== ""){
        div.style.display = "block"
        document.getElementById("exampleFormControlInput1").style.background = "none";
    }
    else{
        document.getElementById("error").style.display = "block"
    }
}

function fechar(){
    document.getElementById("error").style.display = "none"
    document.getElementById("exampleFormControlInput1").style.background = "lightpink";
}

function calcularTotal(){
    var selectPratos = document.getElementById("selectPratos");
    var selectBebidas = document.getElementById("selectBebidas");
    var selectSobremesas = document.getElementById("selectSobremesas");
    var resultadoSpan = document.getElementById("resultado");


var total = 0;
var pratos = 0;
var bebidas = 0;
var sobremesas = 0;

switch (selectPratos.value){
    case "Coxinha (c. catupiry)":
        total += 8.50;
        pratos = 8.50;
    break;
    case "Empadão de camarão":
        total += 12.90;
        pratos = 12.90;
    break;
    case "Sanduiche natural":
        total += 9.80;
        pratos = 9.80;
    break;
}

switch (selectBebidas.value){
    case "Cafés":
        total += 9.0;
        bebidas = 9.0;
    break;
    case "Sucos naturais":
        total += 11.0;
        bebidas = 11.0;
    break;
    case "Chás":
        total += 8.50;
        bebidas = 8.50;
    break;
}

switch (selectSobremesas.value){
    case "Fatia de bolo":
        total += 9.50;
        sobremesas = 9.50;
    break;
    case "Bombons":
        total += 4.0;
        sobremesas = 4.0;
    break;
    case "Sonhos":
        total += 10.0;
        sobremesas = 10.0;
    break;
}


document.getElementById("pedido-pronto").style.display = "block"
document.getElementById("pratos-pronto").textContent = selectPratos.value + " R$ " + pratos.toFixed(2);
document.getElementById("bebidas-pronto").textContent = selectBebidas.value + " R$ " + bebidas.toFixed(2);
document.getElementById("sobremesas-pronto").textContent = selectSobremesas.value + " R$ " + sobremesas.toFixed(2);
resultadoSpan.textContent = "R$ " + total.toFixed(2);
}


function limpar(){
document.getElementById("pedido-pronto").style.display = "none";
document.getElementById("selects-div").style.display = "none";
document.getElementById("exampleFormControlInput1").value = "";
document.getElementById("resultado").value = "";
document.getElementById("selectPratos").value = "Selecione seu prato";
document.getElementById("selectBebidas").value = "Selecione sua bebida";
document.getElementById("selectSobremesas").value = "Selecione sua sobremesa";
}