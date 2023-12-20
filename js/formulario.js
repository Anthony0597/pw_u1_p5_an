console.log("elementos Vue");
console.log(Vue);

const estudiantes = [{ nombre: "Anthony", apellido: "Naranjo", hobby: "música", genero: "masculino", pais: "Ecuador" },
{ nombre: "Mauricio", apellido: "Cacuango", hobby: "música", genero: "masculino", pais: "Ecuador" },
{ nombre: "Jhon", apellido: "Arteaga", hobby: "música", genero: "masculino", pais: "Ecuador" },
{ nombre: "Augusto", apellido: "Salazar", hobby: "música", genero: "masculino", pais: "Ecuador" },
{ nombre: "Alfred", apellido: "Guamaninga", hobby: "música", genero: "masculino", pais: "Ecuador" }]

console.log(estudiantes)
console.table(estudiantes)

const app = Vue.createApp({
    /*template: `
    <h1>Hola mundo</h1>
    <p>Desde app.js</p>
    <h6>{{1+1}}</h6>
    <p>{{[1,2,3,4,5,6,7,8]}}</p>
    <p>{{true?'verdadero':'falso'}}</p>
    `*/
    methods: {
        cambiarMensaje() {
            console.log("Se esta cambiando el mensaje")
            console.log(this.mensaje)
            this.mensaje = "Valor cambiado"
        },
        cambiarNumero() {
            this.valor += 1
        },
        agregarEstudiante() {
            console.log(this.nombre)
            const estu = { nombre: this.nombre, apellido: this.apellido, hobby: this.hobby, genero: this.genero, pais: this.pais }
            //this.lista.unshift(estu)
            this.lista.push(estu)
        },
        editarEstudiante() {

        },
        presionandoTecla(event) {
            console.log("presionanado")
            console.log(event)
        },
        presionandoTeclaApe({ charCode }) {
            if (charCode === 13) {
                this.agregarEstudiante()
            }
        },
        agregarEstudianteMod() {
            console.log("Agregar Estudiante")
            console.log(this.nombre)
        }
    },
    watch: {

    },
    data() {
        return {
            nombre: undefined,
            apellido: null,
            hobby: null,
            genero: null,
            pais: null,
            lista: estudiantes
        }
    }
})

app.mount('#formulario')