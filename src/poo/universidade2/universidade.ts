import { Departamento } from "./departamento";

export class Universidade {
    private _nome: string;
    private _local: string;
    private _departamento : Departamento[]

    constructor(nome: string, local: string, departamento: Departamento[]) {
        this._nome = nome;
        this._local = local;
        this._departamento = departamento;

    }

    get nome(){
        return this._nome;
    }

    get local(){
        return this._local;
    }

    get departamento(){
        return this._departamento;
    }
}
