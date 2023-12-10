//este ejemplo es con objetos
const persona={
    nombre: "Juan",
    apellidos:"Apolonio",
    edad:30,
    direccion:{
        calle: 'Calle falsa 727',
        codigoPostal:3800
    }
}
//en el objeto no viene ordenado
//tipicamente usuariamos estos
// const nombre = persona.nombre;
// const apellidos = persona.apellidos;
// const edad = persona.edad;
// console.log(nombre,apellidos,edad);
//pero el poder de el destructuring seria lo siguiente
// const {nombre:nombreprimero,apellidos:apellidoPaterno,edad:edadNacimiento} =persona
//podemos renombre las variables que no fuera la variable original
// console.log(nombreprimero,apellidoPaterno,edadNacimiento)
// const {nombre,...otrosDatos} = persona;
//con esto hacemos que solo nos de el nombre y apartamos la demas informacion
// console.log(nombre,otrosDatos)

//en casos que tenga dentro de un objeto
const {nombre,direccion:{calle,codigoPostal}} = persona;
//aqui es otro persona es destructuring dentro de otro
// const {calle,codigoPostal}=direccion;
console.log(nombre,codigoPostal)