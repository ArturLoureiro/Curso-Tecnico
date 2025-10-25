"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mensagem_js_1 = require("./classes/mensagem.js");
const containerTabela = document.getElementById("container-tabela");
function carregarTabela() {
    const listaMensagem = mensagem_js_1.Mensagem.listar();
    // Limpa container
    containerTabela.innerHTML = "";
    if (listaMensagem.length === 0)
        return;
    // Cria tabela
    const tabela = document.createElement("table");
    tabela.border = "1";
    // Cabeçalho
    const thead = tabela.createTHead();
    const trHead = thead.insertRow();
    ["Nome", "Email", "Mensagem", "Ações"].forEach(texto => {
        const th = document.createElement("th");
        th.textContent = texto;
        trHead.appendChild(th);
    });
    // Corpo da tabela
    const tbody = tabela.createTBody();
    listaMensagem.forEach(msg => {
        const tr = tbody.insertRow();
        tr.insertCell().textContent = msg.nome;
        tr.insertCell().textContent = msg.email;
        tr.insertCell().textContent = msg.mensagem;
        const tdAcao = tr.insertCell();
        const btnExcluir = document.createElement("button");
        btnExcluir.textContent = "Excluir";
        btnExcluir.addEventListener("click", () => {
            mensagem_js_1.Mensagem.excluir(msg.id);
            carregarTabela();
        });
        tdAcao.appendChild(btnExcluir);
    });
    containerTabela.appendChild(tabela);
}
// Carrega tabela ao iniciar
window.addEventListener("load", carregarTabela);
// Atualiza tabela quando nova mensagem é cadastrada
window.addEventListener("mensagemAtualizada", carregarTabela);
