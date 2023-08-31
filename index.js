    let entradaDeDivida = document.querySelector("#divida");

function valorDaDivida(form) {
     form.divida.blur();
     entradaDeDivida = parseInt(prompt("Insira o Valor da Dívida"));
    diasDeAtraso(form) 
}

function diasDeAtraso(form) {
     form.atraso.blur();
     form.atraso.value = prompt("Insira os dias de atraso");
    taxaJuros(form);
}

function taxaJuros(form) {
    form.juros.blur();
    if(form.atraso.value <= 15){
        form.juros.value = "Taxa de 5% de Juros."
    }else if(form.atraso.value > 15){
        form.juros.value = "Taxa de 10% de Juros."
    }else{
        form.juros.value = "Valor Normal."
    }
    valorDoResultado(form);
}

function valorDoResultado(form) { 
     form.resultado.blur();
    if(entradaDeDivida > 0){
        if(form.atraso.value > 0){
            if(form.atraso.value <= 15){
                form.resultado.value =   entradaDeDivida + entradaDeDivida * 0.5 * 0.10 + ",00 de Dívida";
            } else if(form.atraso.value > 15) {
                form.resultado.value = entradaDeDivida + entradaDeDivida * 0.10 * 1.00 + ",00 de Dívida";
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
    console.log(typeof entradaDeDivida)
}
const btn = document.querySelector("#btn");

btn.addEventListener('click' , function() {
     let entradaDivida = document.querySelector("#divida");
     let entradaAtraso = document.querySelector("#atraso");
     let entradaJuros =  document.querySelector("#juros");
     let entradaResultado = document.querySelector("#resultado");

     entradaDivida.value = "";
     entradaAtraso.value = "";
     entradaJuros.value = ""
     entradaResultado.value = "";
})














