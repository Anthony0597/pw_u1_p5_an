function sumarNumerosCompleto(){
    var n1=parseInt(document.getElementById('numero1').value);
    var n2=parseInt(document.getElementById('numero2').value);
    console.log('Funcion sumarNumeros'+n1)
    console.log('Funcion sumarNumeros'+n2)
    var resultado=n1+n2;
    document.getElementById('idresultado').innerText=resultado;
}

function restarNumerosCompleto(){
    var n1=parseInt(document.getElementById('numero1').value);
    var n2=parseInt(document.getElementById('numero2').value);
    console.log('Funcion sumarNumeros'+n1)
    console.log('Funcion sumarNumeros'+n2)
    var resultado=n1-n2;
    document.getElementById('idresultado').innerText=resultado;
}

function multiplicarNumerosCompleto(){
    var n1=parseInt(document.getElementById('numero1').value);
    var n2=parseInt(document.getElementById('numero2').value);
    console.log('Funcion sumarNumeros'+n1)
    console.log('Funcion sumarNumeros'+n2)
    var resultado=n1*n2;
    document.getElementById('idresultado').innerText=resultado;
}

function dividirNumerosCompleto(){
    var n1=parseInt(document.getElementById('numero1').value);
    var n2=parseInt(document.getElementById('numero2').value);
    console.log('Funcion sumarNumeros'+n1)
    console.log('Funcion sumarNumeros'+n2)
    var resultado=n1/n2;    
    document.getElementById('idresultado').innerText=resultado;
}

function cambiarImagen(){
    document.getElementById('imangeid').src='../img/images.jpg';
}