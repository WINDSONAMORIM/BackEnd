export class Carro{
    consumoKmLt : number;
    nivelCombustivel: number;

    constructor(consumoKmLt : number){
        this. consumoKmLt = consumoKmLt;
        this.nivelCombustivel = 0;
    }

    andar(distancia: number){
        if(this.nivelCombustivel = 0){
            console.log('Favor abastecer o veiculo antes de andar')
            return
        }
        if( (distancia * this.consumoKmLt) > this.nivelCombustivel ){
            console.log('Nivel de combustível não é suficiente para o KM à percorrer')
            return
        }

        this.nivelCombustivel -= (distancia * this.consumoKmLt)

    }

    obterGasolina(){
        console.log(this.nivelCombustivel)
    }

    adicionarGasolina(valor: number){
        this.nivelCombustivel += valor
    }
}