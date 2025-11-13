const nomeCliente = document.querySelector("#nomeCliente");
const cnpj = document.querySelector("#cnpj");
const endereco = document.querySelector("#endereco");
const btn_salvar_cliente = document.querySelector("#btnSalvarCliente");
const form_cliente = document.querySelector("#form-cliente");
const lista_clientes = document.querySelector("#lista-clientes");

const db_salvar_clientes = [];

btn_salvar_cliente.addEventListener("click", (e) => {
  e.preventDefault();

  const dados_cliente = {
    nomeCliente: nomeCliente.value,
    cnpj: cnpj.value,
    endereco: endereco.value,
  };

  db_salvar_clientes.push(dados_cliente);
  localStorage.setItem("Clientes", db_salvar_clientes);

  nomeCliente.value = "";
  cnpj.value = "";
  endereco.value = "";
});

function mostrar_dados() {
  const get_dados = db_salvar_clientes.map((cliente) => {
    return `
      <div>${cliente.nomeCliente}</div>
      <div>${cliente.cnpj}</div>
      <div>${cliente.endereco}</div>
    `;
  });

  lista_clientes.innerHTML = get_dados;
}
mostrar_dados();
