export class Animal{
    raca: string;
    cor: string;

    constructor (raca: string,cor: string){
        this.cor = cor;
        this.raca = raca;
    }

    abanharRabo(){
        console.log('abanhou')
    }
}