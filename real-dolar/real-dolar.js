const values = async () => {
  const data = await fetch(
    "https://economia.awesomeapi.com.br/last/USD-BRL"
  ).then((response) => response.json());
  const valueDolar = data.USD.ask;

  const numUSD = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "USD",
  });

  const dolar = (document.getElementById(
    "input-valor-do-dolar"
  ).value = `Dólar: ${numUSD.format(valueDolar)}`);
};
values();

function pressEnter(chave) {
  if (chave.key === "Enter") {
    valorFinal();
  }
}

const valorFinal = async () => {
  const real = document.getElementById("input-real");

  if (real.value && real.value > 0) {
    const data = await fetch(
      "https://economia.awesomeapi.com.br/last/USD-BRL"
    ).then((response) => response.json());

    const valueDolar = data.USD.ask;

    const botaoConverte = document.getElementById("botao");
    const botaoNovoValor = document.getElementById("botao-converter-denovo");

    const numBRL = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

    const numUSD = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "USD",
    });

    const resultado = real.value / valueDolar;

    const final = document.querySelector("p");

    document.getElementById("input-real").setAttribute("readonly", "true");

    final.innerHTML =
      numBRL.format(real.value) +
      " convertido para Dólar é: " +
      numUSD.format(resultado);

    final.style.fontSize = "23px";
    botaoConverte.style.display = "none";
    botaoNovoValor.style.display = "inline-block";
  } else {
    document.getElementById("modal-container").style.display = "flex";

    setTimeout(function () {
      document.getElementById("modal-container").style.display = "none";
    }, 2500);
    real.value = "";
  }
};

document.addEventListener("keypress", pressEnter);
