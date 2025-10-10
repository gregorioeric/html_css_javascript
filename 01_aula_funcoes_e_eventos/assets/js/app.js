const campo_input = document.querySelector("#campo-input");
const form_simples = document.querySelector("#form-simples");
const btnEnviar = document.querySelector("#btn-enviar");
const resultado = document.querySelector("#resultado");

/*
Eventos:

click, focus, input, change,
focusin, focusout, keyup,
keydown
*/

function mostrar_mensagem(valorInput) {
  const msg = `
    Nome do Cliente é: ${valorInput}
  `;

  return (resultado.innerHTML = msg);
}

btnEnviar.addEventListener("click", (e) => {
  e.preventDefault();
  const campo_input_valor = campo_input.value;
  // innerHTML => Coloca informação no html
  // resultado.innerHTML = campo_input_valor;
  mostrar_mensagem(campo_input_valor);
});
