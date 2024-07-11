import { Produto } from "./Produto";

export class Cosmeticos extends Produto {


    constructor(id: number, nome: string, tipo: number, preco: number,
        fragancia: string) {
        super(id, nome, tipo, preco)
        this._fragancia = fragancia;
    }
    private _fragancia: string;

   
	public get fragancia(): string {
		return this._fragancia;
	}

    public set fragancia(value: string) {
		this._fragancia = value;
	}
    public visualizar() {
        super.visualizar();
        console.log(`o produto escolhido foi uma fragancia. ${this._fragancia}`);

}
}