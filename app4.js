"use strict";
const personaFull = {
    nombre: "Juan",
    apellido: "Apolonio",
    edad: 30,
    direccion: {
        calle: 'Calle falsa 727',
        codigoPostal: 3800,
        pais: "España"
    }
};
//asi podemos obtener la informacion de un objeto para luego aplicarlo
//y lo hacemos desde los parametros
//desde las propiedad vas obtener los valores de nombre y apellidos
function getFullName({ nombre, apellido }) {
    return `${nombre} ${apellido}`;
}
console.log(getFullName(personaFull));
function getSalary() {
    return [900, 200, 500, 100];
}
const [tipo1, tipo2, tipo3] = getSalary();
console.log(tipo1, tipo2, tipo3);
