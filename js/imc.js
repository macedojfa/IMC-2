var peso = document.getElementById("peso");
var altura = document.getElementById("altura");
var f = document.getElementById("f");
var m = document.getElementById("m");
document.getElementById("calcular").addEventListener("click", validar);
let resulIMC = document.querySelector(".resultado-title")
let resulPeso = document.querySelector(".resultado-subtitle")
let btnreset = document.querySelector(".reiniciar");
btnreset.addEventListener("click", reset);

function reset(){
    peso.value = "";
    altura.value = "";
    f.checked = false;
    m.checked = false;
    resulIMC.innerHTML = "Resultado: ";
    resulPeso.innerHTML = "Seu peso: ";
}
 
    
    

function validar(){
    if(peso.value == "" || altura.value == "" || (f.checked == false && m.checked == false)){
        alert("Preencha todos os campos!");
        document.getElementById("calcular").removeEventListener("click", calcularIMC);
    }else{
        calcularIMC();
    }

}
function calcularIMC(){
    var arraySexo = [];
    var arrayPessoa = [peso.value, altura.value];
    var imc = Number(arrayPessoa[0]) / (Number(arrayPessoa[1])/100 * Number(arrayPessoa[1])/100);
    var resultado = "";
    if (f.checked){
        arraySexo.push("f");
    }else if (m.checked){
        arraySexo.push("m");
 
    }
    if (arraySexo=="m"){
    
    if (parseFloat(imc) < 20.7){
        resultado = "Abaixo do peso";
    }
    else if (parseFloat(imc) >= 20.8 && (imc) <= 26.4){
        resultado = "Peso normal";
    }
    else if (parseFloat(imc) >= 26.5 && (imc) <= 27.8){
        resultado = "Marginalmente acima do peso";   
    }
    else if (parseFloat(imc) >= 27.9 && (imc) <= 31.1){
        resultado = "Acima do peso ideal";
    }
    else if (parseFloat(imc) >= 31.2){
        resultado = "Obesidade ";
     
    }
    }
    else if (arraySexo=="f"){
        if (parseFloat(imc) < 19.1){
            resultado = "Abaixo do peso";
        }
        else if (parseFloat(imc) >= 19.1 && (imc) <= 25.8){
            resultado = "Peso normal";
        }
        else if (parseFloat(imc) >= 25.9 && (imc) <= 27.3){ 
            resultado = "Marginalmente acima do peso";
        }
        else if (parseFloat(imc) >= 27.4 && (imc) <= 32.3){
            resultado = "Acima do peso ideal";
        }
        else if (parseFloat(imc) >= 32.4){
            resultado = "Obesidade";
        }
    }
    resulIMC.innerHTML = "Resultado: " + imc.toFixed(1);
    resulPeso.innerHTML = "Seu peso: " + resultado;
   
}
      