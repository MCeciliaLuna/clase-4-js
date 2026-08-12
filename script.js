console.log("Hola mundo")

//MÉTODOS DE ARRAYS
const familiares = [
    { nombre: "María", apellido: "Luna", edad: 45 },
    { nombre: "Juan", apellido: "González", edad: 17 },
    { nombre: "Ana", apellido: "Luna", edad: 32 },
    { nombre: "Pedro", apellido: "González", edad: 12 },
    { nombre: "Lucía", apellido: "González", edad: 68 },
    { nombre: "Cecilia", apellido: "Luna", edad: 29 },
];

// Ejemplo: Imprimir el nombre de TODOS los familiares automáticamente
familiares.forEach(function (familiar) {
    // "familiar" representa a CADA objeto del array, uno a la vez
    // En la primera vuelta, familiar = { nombre: "María", ... }
    // En la segunda vuelta, familiar = { nombre: "Juan", ... }
    // Y así sucesivamente...
    // console.log(familiar.edad);
});

//FILTER
//   const nuevo = array.filter(function(parámetro) {
//       return condición;
//   })

const mayoresDeEdad = familiares.filter(function(familiar) {
    return familiar.edad >= 18;
});

// console.log(familiares)
// console.log(mayoresDeEdad);

//MAP
// Ejemplo: Crear un nuevo array con los nombres completos
const nombresCompletos = familiares.map(function(familiar) {
    // Por cada familiar, devolvemos un STRING con nombre + apellido
    return familiar.nombre + " " + familiar.apellido;
});

// console.log(nombresCompletos);

const familiarUno = nombresCompletos[2]
// console.log(familiarUno)

const edadesEn10Anios = familiares.map(function(familiar) {
    return {
        nombre: familiar.nombre,
        edadActual: familiar.edad,
        edadEn10Anios: familiar.edad + 10,
    };
});

// console.log(edadesEn10Anios)

// DOM
// document
//console.log(document.title)


//getELementById
const emailUsuario = document.getElementById("email");
const contraseñaUsuario = document.getElementById("contraseña");

const datosUsuarioLogin = () => {
    if (emailUsuario.value === "lunama.cecilia@gmail.com"){
        console.error("ESTE MAIL YA ESTÁ LOGUEADO");
        alert("Intenta con otro email");
    }

    if (contraseñaUsuario.value.length < 8) {
        console.warn("La contraseña es demasiado corta");
        alert("Ingresa una contraseña más larga");
        return;
    }
    console.log("Logueo function");
}