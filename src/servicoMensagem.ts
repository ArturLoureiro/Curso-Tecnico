import {Mensagem} from "./classes/mensagem.js"

export class ServicoMensagem {

static listar(): Mensagem[] {
return Mensagem.listar()
}

static salvar(mensagem: Mensagem): void {

mensagem.cadastrar()
}

static excluir(id: string): void {

Mensagem.excluir(id)
}
}