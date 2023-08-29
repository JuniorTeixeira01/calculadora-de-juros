

function valorDaDivida() {
    divida.blur();
    divida.value = prompt("Insira o Valor da Dívida");
    diasDeAtraso() 
}

function diasDeAtraso() {
    atraso.blur();
    atraso.value = prompt("Insira os dias de atraso");
    taxaJuros();
}

function taxaJuros() {
    juros.blur();
    if(atraso.value <= 15){
        juros.value = "Taxa de 5% de Juros."
    }else if(atraso.value > 15){
        juros.value = "Taxa de 10% de Juros."
    }else{
        juros.value = "Valor Normal."
    }
    valorDoResultado();
}

function valorDoResultado() {

    if(divida.value > 0){
        if(atraso.value > 0){
            if(atraso.value <= 15){
                resultado.value = divida.value + divida.value * 0.5 * 0.10;
            } else if(atraso.value > 15) {
                resultado.value = divida.value + divida.value * 0.10 * 0.10;
            } else{
                return "fim"
            }
        }else{
            resultado.value = "Você está em dia"
        }
    }else{
        resultado.value = "O valor da dívida precisa ser Maior que zero!"
    }

    //J = C*i*t (J juros, C capital, i taxa de juros e t tempo);
    //5% de 1.000, a conta fica assim: (5 x 1.000) ÷ 100
}
const btn = document.querySelector("#btn");

btn.addEventListener('click' , function() {
     let entradaDivida = document.querySelector("#divida");
     let entradaAtraso = document.querySelector("#atraso");
     let entradaJuros = document.querySelector("#juros");
     let entradaResultado = document.querySelector("#resultado")

     entradaDivida.value = "";
     entradaAtraso.value = "";
     entradaJuros.value = ""
     entradaResultado.value = "";
})












