let num1=""
let num2=""
let operador=""
let comp=false

const limpiarL=()=>{
    document.getElementById("resultado").innerText=""
    num1=""
    num2=""
    operador=""
    comp=false
    //document.getElementById("entrada").innerText=""
}

const parseable=(numero)=>parseInt(numero)

const agregarNum=(num)=>{
    if(!comp){
        num1=num1+=num
        //document.getElementById("entrada").innerText+=num1
    }else{
        num2=num2+=num
        //document.getElementById("entrada").innerText+=num2
        document.getElementById("resultado").innerText=operacion()
    }   
}

const agregarOpe=(ope)=>{
    if(operador===""){
        operador=ope
        //document.getElementById("entrada").innerText+=ope
        comp=true
    }   

}

const operacion=()=>{
    if(operador==="+"){return parseable(num1)+parseable(num2)}
    if(operador==="-"){return parseable(num1)-parseable(num2)}
    if(operador==="*"){return parseable(num1)*parseable(num2)}
    if(operador==="/"){return parseable(num1)/parseable(num2)}
}
 