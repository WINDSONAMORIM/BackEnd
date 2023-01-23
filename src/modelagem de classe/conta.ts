export class Conta{
    numConta: number;
    nomeCorrentista: string;
    saldoConta: number;

    constructor(numConta: number, nomeCorrentista: string){
        this.numConta = numConta;
        this.nomeCorrentista = nomeCorrentista;
        this.saldoConta = 0;
    }

    alterarNome(nomeCorrentista: string){
        this.nomeCorrentista = nomeCorrentista;
        console.log(`Seu nome foi alterado para ${this.nomeCorrentista}`);
    }

    deposito(valor: number){
        this.saldoConta += valor;
        console.log(`Depósito realizado com sucesso. Seu novo saldo é de : R$${this.saldoConta.toFixed(2)}`)
    }

    saque(valor: number){
        if(this.saldoConta < valor){
            console.log('Saldo insuficiente');
            return
        }
        this.saldoConta -= valor; 
    }
}