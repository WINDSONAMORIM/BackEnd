import { Universidade } from "./universidade";

export class Pessoa {
    private _nome: string;
    private _data: string;
    private _universidade: Universidade;

    constructor(nome: string, data: string, universidade: Universidade){
        this._nome = nome;
        this._data = data;
        this._universidade = universidade;
    }

    get data(){
        return this._data;
    }

    get nome(){
        return this._nome;
    }

    get universidade(){
        return this._universidade;
    }

    mostrarDados() {
        console.log(`Nome: ${this.nome} | Data: ${this.data} | Universidade: ${this._universidade.nome} - Local: ${this._universidade.local}`);
    }
}  
