const values = async () => {
    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL").then(response => response.json())
    const valueDolar = data.USDBRL.ask

    const numUSD = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'USD'
    })

    const dolar = document.getElementById("input-valor-do-dolar").value = `Dólar: ${numUSD.format(valueDolar)}`
}
values()

const valorFinal = async () => {
    let dolar = document.getElementById("input-dolar").value;

    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL").then(response => response.json())
    const valueDolar = data.USDBRL.ask

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

    let resultado = valueDolar * dolar;

    let final = document.querySelector("p");
    
    document.getElementById("input-dolar").setAttribute("readonly", "true");

    final.innerHTML = numUSD.format(dolar) + " convertido para Real é: " + numBRL.format(resultado);
    final.style.fontSize = "23px";
    botaoConverte.style.display = "none";
    botaoNovoValor.style.display = "inline-block";
}