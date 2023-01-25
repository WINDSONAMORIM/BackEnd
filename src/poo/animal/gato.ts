import { Animal } from "./animal";

export class Gato extends Animal{
    constructor (raca: string,cor: string){
        super(raca, cor)
     }
     
    miar(){
        console.log('Miau')
    }
}