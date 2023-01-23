export class Calculadora{
    historico: string [];

    constructor(){
        this.historico = [];
    }

    somar(num1: number, num2: number){
        console.log(`${num1} + ${num2} = ${num1+num2}`)
        this.historico.push(`${num1} + ${num2} = ${num1+num2}`)
    }

    subtrair(num1: number, num2: number){
        console.log(`${num1} - ${num2} = ${num1-num2}`)
        this.historico.push(`${num1} - ${num2} = ${num1-num2}`)
    }

    multiplicar(num1: number, num2: number){
        console.log(`${num1} * ${num2} = ${num1*num2}`)
        this.historico.push(`${num1} * ${num2} = ${num1*num2}`)
    }

    divisao(num1: number, num2: number){
        if(num2 = 0){
            console.log('Não é possivel realizar essa operação')
            return
        }
        console.log(`${num1} / ${num2} = ${num1/num2}`)
        this.historico.push(`${num1} / ${num2} = ${num1/num2}`)
    }

    visualizarHistorico(){
        this.historico.forEach(function(historico) {
            console.log(historico);
        });
    };
}