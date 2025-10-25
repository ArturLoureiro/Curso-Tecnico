import { Mensagem } from "./classes/mensagem.js";
import { ServicoMensagem } from "./servicoMensagem.js";
window.onload = () => {
    carregarTabela();
};
const formMensagem = document.getElementById("formMensagem");
const txtNome = document.getElementById("txtNome");
const txtEmail = document.getElementById("txtEmail");
const txtTexto = document.getElementById("txtMensagem");
formMensagem.addEventListener("submit", (event) => {
    event.preventDefault();
    const nome = txtNome.value;
    const email = txtEmail.value;
    const texto = txtTexto.value;
    const novaMensagem = new Mensagem(nome, email, texto);
    ServicoMensagem.salvar(novaMensagem);
    formMensagem.reset();
    carregarTabela();
});
function carregarTabela() {
    const listaMensagem = ServicoMensagem.listar();
    const tabela = document.getElementById("tabela-mensagem");
    tabela.innerHTML = `

<tr>
<th>Nome</th>
<th>Email</th>
<th>Mensagem</th>
<th>Ações</th>
</tr>

`;
    listaMensagem.forEach(mensagem => {
        const linha = tabela.insertRow();
        linha.insertCell().textContent = mensagem.nome;
        linha.insertCell().textContent = mensagem.email;
        linha.insertCell().textContent = mensagem.texto;
        const btnExcluir = document.createElement("button");
        btnExcluir.textContent = "Excluir";
        btnExcluir.addEventListener("click", () => {
            if (confirm("Deseja realmente excluir esta mensagem?")) {
                excluirMensagem(mensagem.id);
            }
        });
        linha.insertCell().appendChild(btnExcluir);
    });
}
function excluirMensagem(id) {
    ServicoMensagem.excluir(id);
    carregarTabela();
}
//# sourceMappingURL=tabelaMensagem.js.map