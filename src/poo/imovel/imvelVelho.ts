import { Imovel } from "./imovel";

export class ImovelVelho extends Imovel {
    precoDesconto: number;

    constructor(endereco: string, preco: number, precoDesconto: number) {
        super(endereco, preco);
        this.precoDesconto = precoDesconto;
    }
    imprimeDesconto(): void {
        console.log(`Valor total do imóvel com desconto: ${this.preco - this.precoDesconto}`)
    }
};