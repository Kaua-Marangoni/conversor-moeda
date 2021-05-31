function valorFinal() {
    let dolar = document.getElementById("input-dolar").value;
    let real = document.getElementById("input-real").value;
    
    let resultado = real * dolar;

    let final = document.querySelector("p");

    final.innerHTML = "$ " + dolar + " convertido para Real é: R$ " + resultado;
    final.style.fontSize = "23px";
}