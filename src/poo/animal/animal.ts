export abstract class Animal{
    private raca: string;
    private cor: string;

    constructor (raca: string,cor: string){
        this.cor = cor;
        this.raca = raca;
    }

    get getCor(){
        return this.cor
    }

    get getRaca(){
        return this.raca
    }    
    
    abanharRabo(){
        console.log('abanhou')
    }
}