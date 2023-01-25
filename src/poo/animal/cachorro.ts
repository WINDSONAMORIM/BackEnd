import { Animal } from "./animal";

export class Cachorro extends Animal{
    constructor (raca: string,cor: string){
       super(raca, cor)
    }

latir(){
    console.log( 'Au au')
}

}