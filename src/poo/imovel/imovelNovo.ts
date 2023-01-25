import { Imovel } from "./imovel";

export class ImovelNovo extends Imovel {
    precoAdicional: number;

    constructor(endereco: string, preco: number, precoAdicional: number ) {
        super(endereco, preco);
        this.precoAdicional = precoAdicional;
    }
    imprimeValor(): void {
        console.log(`Valor total do imóvel com adicional: ${this.precoAdicional + this.preco}`)
    }
};