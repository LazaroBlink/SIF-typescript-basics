
export default class Tipos{
    numero1: number;
    numero2: number;

    constructor(numero1: number, numero2: number){
        this.numero1 = numero1;
        this.numero2 = numero2;
    }

    sumar(numero1: number, numero2: number){
        return numero1 + numero2;
    }

    restar(numero1: number, numero2: number){
        return numero1 - numero2;
    }

    multiplicar(numero1: number, numero2: number){
        return numero1 * numero2;
    }

    dividir(numero1: number, numero2: number){
        return numero1 / numero2;
    }
}