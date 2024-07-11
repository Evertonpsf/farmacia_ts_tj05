import { Produto } from "../model/Produto";
import { ProdutoRepository } from "../repository/ProdutoRepository";

export class ProdutoController implements ProdutoRepository {

    private listaProdutos: Array<Produto> = new Array<Produto>();

    public tipo: number = 0;



    criarProduto(idProduto: Produto): void {
        this.listaProdutos.push(idProduto);
        console.log("\nO produto foi criado!");
  
    }

    listarTodosProdutos(): void {
        for (let produto of this.listaProdutos) {
            produto.visualizar()

        };
    }

    consultarProduto(tipo: number): void {
        let consultaId = this.buscarNoArray(tipo);

        if (consultaId !== null)
            consultaId.visualizar();
        else
            console.log(`\nO produto nao foi encontrado!`);

    }

    atualizarProduto(produto: Produto): void {
        let consultaId = this.buscarNoArray(produto.id);

        if (consultaId != null) {
            this.listaProdutos[this.listaProdutos.indexOf(consultaId)] = produto;
            console.log("\nO produto: " + produto.id + "Foi atualizado com sucesso!");

        } else
            console.log("\nO produto: " + produto.id + "\n Nao foi localizado!");

    }

    deletarProduto(numero: number): void {
        let consultaId = this.buscarNoArray(numero);

        if (consultaId != null) {
            this.listaProdutos.splice(this.listaProdutos.indexOf(consultaId), 1);
            console.log("\nO produto" + numero + "foi apagado com sucesso!");

        } else
            console.log("\nO produto" + numero + "nao foi encontrado!");

    }

}