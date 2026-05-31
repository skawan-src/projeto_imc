function meuEscopo() {
  const form = document.querySelector(".form");
  const peso = document.querySelector("#pesoIn");
  const altura = document.querySelector("#alturaIn");
  const resultado = document.querySelector("#resposta");

  // Calculo IMC é dado por: (peso dividido por altura²).
  function noActualize(event) {
    event.preventDefault();
    const pesoEn = Number(peso.value);
    const alturaEn = Number(altura.value);
    let calculo = pesoEn / (alturaEn ** 2);
    let nivelObesidade;

    if (calculo <= 18.5) {
      nivelObesidade = "(Abaixo do peso)";
    } else if (calculo > 18.5 && calculo <= 24.9) {
      nivelObesidade = "(Peso Normal)";
    } else if (calculo > 25 && calculo <= 29.9) {
      nivelObesidade = "(Sobrepeso)";
    } else if (calculo > 30 && calculo <= 34.9) {
      nivelObesidade = "(Obesidade grau 1)";
    } else if (calculo > 35 && calculo <= 39.9) {
      nivelObesidade = "(Obesidade grau 2)";
    } else {
      nivelObesidade = "(Obesidade grau 3)";
    }

    resultado.style.display = "block";
    resultado.innerHTML = `Seu IMC é ${calculo.toFixed(2)} ${nivelObesidade}`;

    console.log(`Calculo IMC é: ${calculo.toFixed(2)}`);
  }

  // Adicionar uma "escuta" ao evento submit (button) e executa a função.
  form.addEventListener("submit", noActualize);
}

meuEscopo();
