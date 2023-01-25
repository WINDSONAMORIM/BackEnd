export abstract class Ingresso{
    protected valorIngresso: number;

    constructor(valor: number){
        this.valorIngresso = valor;
    }

    imprimirValor(){
        console.log(`Valor do ingresso: ${this.valorIngresso}`)
    }
    
} 