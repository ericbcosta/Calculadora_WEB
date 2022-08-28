const pResultado = document.querySelector("#resultado")

function insert(num){
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML=numero + num;
    pResultado.style.textAlign = 'right';

}

function clean(){
    document.getElementById('resultado').innerHTML="";
    pResultado.style.textAlign = 'right';
}

function back(){
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
    pResultado.style.textAlign = 'right';
}

function calcular(){
    var resultado = document.getElementById('resultado').innerHTML;

    if (resultado){
        document.getElementById('resultado').innerHTML = eval(resultado);
        pResultado.style.textAlign = 'center';
    }
    else{
        document.getElementById('resultado').innerHTML = "Vazio";
    }
}