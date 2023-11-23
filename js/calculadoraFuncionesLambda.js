const sumar=(n1,n2)=>n1+n2;

const sumarNumerosCompleto = ()=>{
    var resultado=parsear('numero1')+parsear('numero2');
    document.getElementById('idresultado').innerText=resultado;
};

const restarNumerosCompleto = ()=>{
    var resultado=parsear('numero1')-parsear('numero2');
    document.getElementById('idresultado').innerText=resultado;
}

const multiplicarNumerosCompleto = ()=>{
    var resultado=parsear('numero1')*parsear('numero2');
    document.getElementById('idresultado').innerText=resultado;
}

const dividirNumerosCompleto =()=>{
    var resultado=parsear('numero1')/parsear('numero2');
    document.getElementById('idresultado').innerText=resultado;
}

const cambiarImagen = ()=>{
    document.getElementById('imangeid').src='../img/images.jpg'
}

const parsear = (id)=>parseInt(document.getElementById(id).value)

function conceptosJS(){
    let var1=10;
    let var1Texto = 'Texto';
    console.log(var1);
    console.log(var1Texto);

    var var2=10;
    var var2Texto='Texto';
    console.log(var2);
    console.log(var2Texto);

    const const1=10;
    const constText="Texto";
    console.log(const1);
    console.log(constText);

    //declaracion de arreglos
    const diasSemana=["Lunes","Martes","Miercoles","Jueves","Viernes"];
    console.log(diasSemana);

}