function valorFinal() {
    let real = document.getElementById("input-real").value;
    let dolar = document.getElementById("input-valor-do-dolar").value;
    let botaoConverte = document.getElementById("botao");
    let botaoNovoValor = document.getElementById("botao-converter-denovo");

    let numBRL = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    })

    let numUSD = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'USD'
    })

    let resultado = real / dolar;

    let final = document.querySelector("p");

    final.innerHTML = numBRL.format(real) + " convertido para Dólar é: " + numUSD.format(resultado);
    final.style.fontSize = "23px";
    botaoConverte.style.display = "none";
    botaoNovoValor.style.display = "inline-block";
}