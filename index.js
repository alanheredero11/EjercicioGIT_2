function suma (op1, op2){
    
    let resultado = op1 + op2;
    return resultado; 
}

function resta (op1, op2){
    
    let resultado = op1 - op2;
    return resultado; 
}

function multiplicacion (op1, op2){
    
    let resultado = op1 * op2;
    return resultado; 
}

function division (op1, op2){
    
    let resultado = op1 / op2;
    return resultado; 
}

function cuadrado (numero){

    return numero * numero;
}

module.exports = {suma, resta, multiplicacion, division, cuadrado}