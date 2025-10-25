export class Mensagem {

public id: string

constructor(

public nome: string,
public email: string,
public texto: string
) 
{
    
this.id = crypto.randomUUID()
this.nome = nome
this.email = email
this.texto = texto
}

cadastrar(): void {

const listaMensagem: Mensagem[] = JSON.parse(localStorage.getItem("listaMensagem") || "[]")

listaMensagem.push(this)
localStorage.setItem("listaMensagem", JSON.stringify(listaMensagem))
}

static listar(): Mensagem[] {

const listaMensagem: Mensagem[] = JSON.parse(localStorage.getItem("listaMensagem") || "[]")
return listaMensagem
}

static excluir(id: string): void {

let listaMensagem: Mensagem[] = JSON.parse(localStorage.getItem("listaMensagem") || "[]")

listaMensagem = listaMensagem.filter((mensagem: Mensagem) => mensagem.id !== id)
localStorage.setItem("listaMensagem", JSON.stringify(listaMensagem))
}
}