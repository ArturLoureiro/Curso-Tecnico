import {Mensagem} from "./classes/mensagem.js"
import {ServicoMensagem} from "./servicoMensagem.js"

window.onload = () => {
carregarTabela()
}

const formMensagem = document.getElementById("formMensagem") as HTMLFormElement
const txtNome = document.getElementById("txtNome") as HTMLInputElement
const txtEmail = document.getElementById("txtEmail") as HTMLInputElement
const txtTexto = document.getElementById("txtMensagem") as HTMLTextAreaElement

formMensagem.addEventListener("submit", (event) => {
event.preventDefault()

const nome = txtNome.value
const email = txtEmail.value
const texto = txtTexto.value
const novaMensagem = new Mensagem(nome, email, texto)

ServicoMensagem.salvar(novaMensagem)
formMensagem.reset()
carregarTabela()
})

function carregarTabela() {

const listaMensagem = ServicoMensagem.listar()
const tabela = document.getElementById("tabela-mensagem") as HTMLTableElement

tabela.innerHTML = `

<tr>
<th>Nome</th>
<th>Email</th>
<th>Mensagem</th>
<th>Ações</th>
</tr>

`

listaMensagem.forEach(mensagem => {

const linha = tabela.insertRow()

linha.insertCell().textContent = mensagem.nome
linha.insertCell().textContent = mensagem.email
linha.insertCell().textContent = mensagem.texto

const btnExcluir = document.createElement("button")

btnExcluir.textContent = "Excluir"
btnExcluir.addEventListener("click", () => {

if (confirm("Deseja realmente excluir esta mensagem?")) {
excluirMensagem(mensagem.id)
}
})

linha.insertCell().appendChild(btnExcluir)
})
}

function excluirMensagem(id: string) {

ServicoMensagem.excluir(id)
carregarTabela()
}