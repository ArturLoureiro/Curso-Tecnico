export declare class Mensagem {
    nome: string;
    email: string;
    texto: string;
    id: string;
    constructor(nome: string, email: string, texto: string);
    cadastrar(): void;
    static listar(): Mensagem[];
    static excluir(id: string): void;
}
//# sourceMappingURL=mensagem.d.ts.map