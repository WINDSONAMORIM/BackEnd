import { Ingresso } from "./ingresso";

export class Camarote extends Ingresso{
    valorAdicional: number;

    constructor(valorIngresso: number, valorAdicional: number){
        super(valorIngresso);
        this.valorAdicional = valorAdicional;
    }

    imprimirValor(){
        console.log(`Valor do ingresso + Adicional: ${this.valorIngresso + this.valorAdicional}`)
    }
}