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
    const real = document.getElementById("input-real").value;

    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL").then(response => response.json())
    const valueDolar = data.USDBRL.ask

    const botaoConverte = document.getElementById("botao");
    const botaoNovoValor = document.getElementById("botao-converter-denovo");

    const numBRL = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    })

    const numUSD = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'USD'
    })

    const resultado = real / valueDolar;

    const final = document.querySelector("p");

    document.getElementById("input-real").setAttribute("readonly", "true");

    final.innerHTML = numBRL.format(real) + " convertido para Dólar é: " + numUSD.format(resultado);
    final.style.fontSize = "23px";
    botaoConverte.style.display = "none";
    botaoNovoValor.style.display = "inline-block";
}