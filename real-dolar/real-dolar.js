function valorFinal() {
    let real = document.getElementById("input-real").value;
    let dolar = document.getElementById("input-valor-do-dolar").value;
    let botaoConverte = document.getElementById("botao");

    let numBRL = new Intl.NumberFormat('pt-BR', {
        style:'currency',
        currency:'BRL' 
    })

    let numUSD = new Intl.NumberFormat('pt-BR', {
        style:'currency',
        currency:'USD'
    })

    //const fetchDolar = () => {
        //const url = `https://economia.awesomeapi.com.br/all/USD-BRL`
        
        //fetch(url)
            //.then(response => response.json())
            //.then(dolar => {
                //console.log(dolar)
            //})
    //}
    
    let resultado = real / dolar;

    let final = document.querySelector("p");

    final.innerHTML = numBRL.format(real) + " convertido para Dólar é: " + numUSD.format(resultado);
    final.style.fontSize = "23px";
    botaoConverte.innerHTML = "Converter outro Valor";
}

//function valorFinal() {
    //var susto = document.getElementById("susto");

    //susto.style.display = "flex";
//}