import { Departamento } from "../universidade2/departamento";
import { Universidade } from "./universidade";

export class Pessoa {
    private _nome: string;
    private _data: string;
    private _universidade: Universidade;
    private _departamento: Departamento;

    constructor(nome: string, data: string, universidade: Universidade, departamento: Departamento){
        this._nome = nome;
        this._data = data;
        this._universidade = universidade;
        this._departamento = departamento;
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

    get departamento(){
        return this._departamento;
    }

    mostrarDados() {
        console.log(`
        Nome: ${this.nome} | 
        Data: ${this.data} | 
        Universidade: ${this._universidade.nome} - 
        Local: ${this._universidade.local} |
        Departamento: ${this._departamento}`);
    }
}  
