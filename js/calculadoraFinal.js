let num1 = ""
let num2 = ""
let operador = ""
let comp = 0

const limpiarL = () => {
    document.getElementById("resultado").innerText = ""
    num1 = ""
    num2 = ""
    operador = ""
    comp = 0
}

const parseable = (numero) => parseFloat(numero)

const agregarNum = (num) => {

    switch (comp) {
        case 0: {
            num1 = num1 += num
            document.getElementById("resultado").innerText = num1
            break;
        }
        case 1: {
            num2 = num2 += num
            document.getElementById("resultado").innerText = num2
            break;
        }
        case 2: {
            break;
        }
        default: {
            break;
        }
    }
}

const agregarOpe = (ope) => {
    if(operador==="") {
        operador = ope
        //document.getElementById("entrada").innerText+=ope
        comp = 1
    }

}

const aplicarOpe = () => {
    document.getElementById("resultado").innerText = operacion()
}

const operacion = () => {
    switch (operador) {
        case '+': { return parseable(num1) + parseable(num2) 
        break}
        case '-': { return parseable(num1) - parseable(num2) 
        break}
        case '*': { return parseable(num1) * parseable(num2) 
            break}
        case '/': { return parseable(num1) / parseable(num2) 
    break}
}
    
}
