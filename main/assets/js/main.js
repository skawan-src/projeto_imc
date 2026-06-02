function meuEscopo() {
  const form = document.querySelector("#form");

  // Adicionar uma "escuta" ao evento submit (enviado pelo form) e executa a função.
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const inputPeso = event.target.querySelector("#peso"); // Busca exatamente o alvo com o id/class especificado, mesma lógica de usar form.querySelector("ID/CLASS"), pois o event.target é literalmente quem ativou o evento (o próprio form).
    const inputAltura = event.target.querySelector("#altura");

    const peso = Number(inputPeso.value); // Se o valor for um NaN ele é considerado falsy
    const altura = Number(inputAltura.value);

    // Transforma valor de "peso" em verdadeiro caso ele for falsy (caso for verdadeiro trasnforma em falso e a condição não é lida).
    // Condição: envia a mensagem junto com a validação.
    if (!peso) {
      setResultado("Peso inválido", false);
      return;
    }

    if (!altura) {
      setResultado("Altura inválida", false);
      return;
    }

    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);
    const msg = `Seu IMC é ${imc} (${nivelImc}).`;
    setResultado(msg, true);
  });

  // Função específica para calcular o IMC
  function getImc(peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
  }

  // Função específica para "buscar" os "níveis" de IMC.
  function getNivelImc(imc) {
    const nivel = [
      "Abaixo do peso", // 0
      "Peso normal", // 1
      "Sobrepeso", // 2
      "Obesidade grau 1", // 3
      "Obesidade grau 2", // 4
      "Obesidade grau 3", // 5
    ];

    if (imc >= 39.9) return nivel[5]; // Caso a condição seja apenas de uma linha, podemos unir tudo.
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc < 18.5) return nivel[0];
  }

  // Função específica para criar o parágrafo.
  function criaP() {
    const p = document.createElement("p"); // Apenas cria e armazena o elemento, mas não adiciona ele á lugar nenhum.
    return p; // Retorna o elemento "p", a tag em específico.
  }

  // Função para adicionar o paragráfo ao id "resultado".
  function setResultado(msg, isValid) {
    const resultado = document.querySelector("#resultado");
    resultado.innerHTML = ""; // Zera os elementos contidos dentro desta div.

    const parag = criaP();

    // Valida se a mensagem foi considerada ruim (encontrado um NaN) ou boa (não foi encontrado um NaN).
    if (isValid) {
      parag.classList.add("paragrafo-resultado"); // classList.add adiciona a classe especificada.
    } else {
      parag.classList.add("bad");
    }

    parag.innerHTML = msg;
    resultado.appendChild(parag); // Adiciona o elemento p como filho.
  }
}

meuEscopo();
