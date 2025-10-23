const nome = document.querySelector("#nome");
const email = document.querySelector("#email");
const telefone = document.querySelector("#telefone");
const nascimento = document.querySelector("#nascimento");
const btn_salvar = document.querySelector("#btn-salvar");
const resultado = document.querySelector("#resultado");

const db_dados = localStorage.getItem("Clientes")
  ? JSON.parse(localStorage.getItem("Clientes"))
  : [];

btn_salvar.addEventListener("click", (e) => {
  e.preventDefault();

  if (!nome.value || !email.value || !telefone.value || !nascimento.value) {
    return console.log("Campos não podem ser vazios!");
  }

  if (nome.value.length < 3) {
    return console.log("Nome precisa ter no minimo 3 caracteres");
  }

  const dados = {
    nome: nome.value,
    email: email.value,
    telefene: telefone.value,
    nascimento: nascimento.value,
  };

  db_dados.push(dados);
  localStorage.setItem("Clientes", JSON.stringify(db_dados));

  nome.value = "";
  email.value = "";
  telefone.value = "";
  nascimento.value = "";
});

nome.addEventListener("input", () => {
  if (nome.value.length < 3) {
    return console.log("Nome precisa ter no minimo 3 caracteres");
  }
});

email.addEventListener("input", () => {});

telefone.addEventListener("input", () => {});

function mostrar_dados() {
  const get_dados = db_dados.map((usuario) => {
    return `
      <div>${usuario.nome}</div>
    `;
  });

  resultado.innerHTML = get_dados;
}
