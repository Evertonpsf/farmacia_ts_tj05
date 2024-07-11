import { Produto } from "../model/Produto";

export interface ProdutoRepository {

    //inserindo os metodos de ciracao do CRUD
    procurarPorId(id: number): void;
    listarTodos(): void;
    cadastrar(produto: number): void;
    atualizar(produto: Produto): void;
    deletar(id: number): void;



}