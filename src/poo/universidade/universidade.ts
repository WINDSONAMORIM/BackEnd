export class Universidade {
    private _nome: string;
    private _local: string;

    constructor(nome: string, local: string) {
        this._nome = nome;
        this._local = local;
    }

    get nome(){
        return this._nome;
    }

    get local(){
        return this._local;
    }
}
