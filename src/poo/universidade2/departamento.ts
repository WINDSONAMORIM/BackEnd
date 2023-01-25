export class Departamento{
    private nome: string;

    constructor(nome:string){
        this.nome = nome;
    }

    get getNome(){
        return this.nome;
    }
}