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
    console.log(diasSemana[0])
    diasSemana[5]="Sabado"
    console.log(diasSemana[5])
    diasSemana.push("Domingo")
    console.log(diasSemana)
    diasSemana.unshift("Feriado")
    console.log(diasSemana)
    const edades=[1,2,3,4,5]
    console.log(edades)
    const edades2=[6,7,8]
    const edadesfinales=edades.concat(edades2)
    console.log(edadesfinales)

    for (const dia of diasSemana){
        console.log(dia)
        if(dia=="Martes"){
            console.log("Martes 2x1")
        }
    }

    //Declaración de objetos

    const estudiante={
        nombre:"Anthony",
        apellido:"Naranjo",
        edad:26,
        genero:"M",
        ciudad:"Quito"
    }
    console.log(estudiante)
    console.log(estudiante.apellido)
    estudiante.nombre="Marcelo"
    console.log(estudiante.nombre)

    const persona={
        nombre:"Anthony",
        apellido:"Naranjo",
        edad:26,
        direccion:{
            callePrincipal:"Av. 6 de diciembre",
            calleSecundaria:"Foch",
            numeracio:"Oe3-34",
            barrio:"Mariscal"
        }
    }

    console.log(persona)
    console.log(persona.direccion)
    console.log(persona.direccion.callePrincipal)

    //Arreglo de 4 pacientes

    const pacientes =[{nombre:"Anthony", apellido:"Naranjo", edad:26},
    {nombre:"Marcelo", apellido:"Naranjo", edad:26},
    {nombre:"Anthony", apellido:"Silva", edad:26},
    {nombre:"Marcelo", apellido:"Silva", edad:26}
    ]

    console.log(pacientes)
    console.table(pacientes)
    console.log(pacientes[0].nombre)
    console.log(pacientes.pop())
    console.log(pacientes.pop())
    console.log(pacientes)

    //Desestructuración arreglos
    const diasSemana2=["Lunes","Martes","Miercoles","Jueves","Viernes"]
    const [dia1,dia2,dia3,dia4,dia5]=diasSemana2
    console.log(dia1)
    console.log(diasSemana2)
    const[d1,d2,d3,d4,d5]=["Lunes","Martes","Miercoles","Jueves","Viernes"]
    console.log(d4)

    //Desestructuración objetos
    const vehiculo={marca:"Chevrolet",modelo:"Spark",anio:2012}
    const {marca,modelo,anio}=vehiculo
    console.log(marca)

    const {objeto,atrib1,atrib2}={objeto:{nombre:"Juan"},atrib1:"hola", atrib2:"Bien"}
    console.log(objeto)
    console.log(atrib2)
}