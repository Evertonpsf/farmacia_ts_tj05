import { Produto } from "../model/Produto";

export interface ProdutoRepository {

    //inserindo os metodos de ciracao do CRUD
    criarProduto(idProduto: number): void;
    listarTodosProdutos(): void;
    consultarProduto(tipo: number): void;
    atualizarProduto(produto: Produto): void;
    deletarProduto(numero: number): void;



}