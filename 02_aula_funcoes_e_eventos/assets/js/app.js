const nome = document.querySelector("#nome");
const email = document.querySelector("#email");
const telefone = document.querySelector("#telefone");
const nascimento = document.querySelector("#nascimento");
const btn_salvar = document.querySelector("#btn-salvar");

btn_salvar.addEventListener("click", (e) => {
  e.preventDefault();

  const dados = {
    nome: nome.value,
    email: email.value,
    telefene: telefone.value,
    nascimento: nascimento.value,
  };

  if (!nome.value || !email.value || !telefone.value || !nascimento.value) {
    return console.log("Campos não podem ser vazios!");
  }

  console.log(dados);
});

nome.addEventListener("input", () => {});

email.addEventListener("input", () => {});

telefone.addEventListener("input", () => {});
