function adicionar(num) {
    let numero = document.getElementById('tela').innerHTML
    document.getElementById('tela').innerHTML = numero + num
}

function limpar() {
    document.getElementById('tela').innerHTML = ''
}

function calcular() {
    let resultado = document.getElementById('tela').innerHTML;
    if(resultado) {
        if(resultado.includes('/0')) {
            alert("Não é possível calcular");
            limpar();
        } else {
            document.getElementById('tela').innerHTML = eval(resultado)
        }
        
    }
}