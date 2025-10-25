import { Mensagem } from "./classes/mensagem.js";
export class ServicoMensagem {
    static listar() {
        return Mensagem.listar();
    }
    static salvar(mensagem) {
        mensagem.cadastrar();
    }
    static excluir(id) {
        Mensagem.excluir(id);
    }
}
//# sourceMappingURL=servicoMensagem.js.map