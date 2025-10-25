export class Mensagem {
    constructor(nome, email, texto) {
        this.nome = nome;
        this.email = email;
        this.texto = texto;
        this.id = crypto.randomUUID();
        this.nome = nome;
        this.email = email;
        this.texto = texto;
    }
    cadastrar() {
        const listaMensagem = JSON.parse(localStorage.getItem("listaMensagem") || "[]");
        listaMensagem.push(this);
        localStorage.setItem("listaMensagem", JSON.stringify(listaMensagem));
    }
    static listar() {
        const listaMensagem = JSON.parse(localStorage.getItem("listaMensagem") || "[]");
        return listaMensagem;
    }
    static excluir(id) {
        let listaMensagem = JSON.parse(localStorage.getItem("listaMensagem") || "[]");
        listaMensagem = listaMensagem.filter((mensagem) => mensagem.id !== id);
        localStorage.setItem("listaMensagem", JSON.stringify(listaMensagem));
    }
}
//# sourceMappingURL=mensagem.js.map