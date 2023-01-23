export class Contador {
   private numero: number;
 
    constructor(numero: number ){
        this.numero = numero;
    }

    zerar(){
        this.numero = 0;
    }

    increment(){
        this.numero -= 1;
    }

    decremnt(){
        this.numero += 1;
    }
 }
