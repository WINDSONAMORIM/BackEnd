import { Animal } from "./animal";

export class Cavalo extends Animal{
    constructor (raca: string,cor: string){
        super(raca, cor)
     }

    relinchar(){
        console.log('iiirrrrí')
    }

}