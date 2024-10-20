//Ejercicio 1 declaracion de variables
let a =5 ,b =10, c;
c=a+b;
console.log("La suma de a y b es= "+ c);

//Ejercio 2 utilizar funcion prompt

let nombre = prompt("Cual es tu nombre?");
console.log ("Hola, "+ nombre+"!");

// Operadores logicos y condicionales
//Ejercico 1
console.log("Operadores logicos y condicionales--Ejercicio 1");

let num1= 16, num2= 34, num3=20;

if (num1>num2 && num1>num3){
  console.log ("El mayor de los tres numeros es: "+ num1)
}else if ( num2 >num3 ){
  console.log("El mayor de los tres numero es: "+num2 );
}else{console.log("El mayor de los tres numeros es: "+num3)}

//Ejercico 2
console.log("Operadores logicos y condicionales--Ejercicio 2");

let parImpar= prompt("Ingresa un numero y te dire si es par o impar");

if( parImpar % 2 ===0){
  console.log("El numero "+ parImpar+", es par");
}else {
  console.log("El numero "+ parImpar+", es impar");
}

//Operadores de asignacion y bucles

//Ejercicio 1 
console.log("Operadores de asignacion y bucles--Ejercicio 1");
let numDec =10;

while(numDec > 0){
  console.log(numDec);
  numDec--
}


//Ejercicio 2
console.log("Operadores de asignacion y bucles--Ejercicio 2");


do{
var numMayor100= prompt("ingrese un numero mayor que 100");
}while(numMayor100<101);
console.log("Ingresaste un nummero mayor a 100: "+numMayor100);

//Funciones
//Ejercicio 1
console.log("Funciones-Ejercicio 1")

function esPar(num4){
  return num4 %2===0;
}

console.log ("El numero "+4+" es par: "+ esPar(4));
console.log ("El numero "+5+" es par: "+ esPar(5));

//Ejercicio 2
console.log("Funciones-Ejercicio 2")

function convertirCelsiusAFareheit(gradosC){
let faren= gradosC*1.8+32 
return faren
}
console.log(30+"°C son equvalentes a "+convertirCelsiusAFareheit(30)+"°F");

//Objetos
//Ejercicio 1
console.log("objetos-Ejercicio 1")
const persona={
  nombre: "Ana",
  edad: 30,
  ciudad:"Mendoza",

  cambiarCiudad: function(nuevaCiudad){
    this.ciudad= nuevaCiudad;
  }
};

console.log("Persona: "+ persona.nombre+",Edad: "+persona.edad+", Ciudad: " +persona.ciudad);

persona.cambiarCiudad("Londres");

console.log("Persona: "+ persona.nombre+",Edad: "+persona.edad+", Ciudad: " +persona.ciudad);
//Ejercicio 2
console.log("objetos-Ejercicio 2")

const libro={
  titulo:"El Quijote",
  autor: "Migel Cervantes ",
  anio:1605,

  esAntiguo: function() {
    const añoActual = new Date().getFullYear();
    const añosTranscurridos = añoActual - this.anio;
    return añosTranscurridos ;
}

};
if (libro.esAntiguo()> 10) {
  console.log("El libro '" + libro.titulo + "' es antiguo.");
} else {
  console.log("El libro '" + libro.titulo + "' es reciente.");
}

//Arrays
//Ejercicio 1
console.log("Arrays-Ejercicio 1")

// Declaración del array original
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Declaración del array para almacenar los resultados
const numerosMultiplicados = [];

// Bucle para multiplicar cada número por 2 y almacenar los resultados
for (let i = 0; i < numeros.length; i++) {
    numerosMultiplicados.push(numeros[i] * 2);
}

// Mostrar el array original y el nuevo array en la consola
console.log("Array original:", numeros);
console.log("Array con números multiplicados por 2:", numerosMultiplicados)
//Ejercicio 2

// Declaración del array vacío llamado pares
const pares = [];

// Bucle for que itera hasta 20 y agrega los primeros 10 números pares al array
for (let i = 0; i <= 20; i += 2) {
    pares.push(i);
}

// Imprimir el array pares en la consola
console.log("Array de números pares:", pares);


//Introduccion al DOM
//Ejercicio 1
// Función para cambiar el color de los párrafos
function cambiarColorAAzul() {
  // Seleccionar todos los elementos <p>
  const parrafos = document.querySelectorAll('p');
  // Iterar sobre cada párrafo y cambiar su color a azul
  parrafos.forEach(function(parrafo) {
      parrafo.style.color = 'blue';
  });
}

// Obtener el botón por su ID
const boton = document.getElementById('cambiarColorBtn');
// Agregar un evento de clic al botón
boton.addEventListener('click', cambiarColorAAzul);

//Ejercicio 2

// Obtener el botón por su ID
const boton1 = document.getElementById('enviarBtn');

// Agregar un evento de clic al botón
boton1.addEventListener('click', function() {
    // Obtener el valor del campo de texto
    const nombre = document.getElementById('nombre').value;

    // Mostrar una alerta con el valor ingresado
    alert('Hola, ' + nombre + '!');
});


//Eventos en DOM
//Ejercicio 1

const lista = document.getElementById('miLista');

        // Obtener todos los elementos <li> dentro de la lista
        const elementosLi = lista.getElementsByTagName('li');

        // Iterar sobre cada elemento <li> y agregar un evento click
        for (let i = 0; i < elementosLi.length; i++) {
            elementosLi[i].addEventListener('click', function() {
                // Mostrar el texto del elemento <li> en la consola
                console.log(this.textContent);
            });
        }

        //Ejercicio 2

        const input = document.getElementById('miInput');
        const deshabilitarBtn = document.getElementById('deshabilitarBtn');
        const habilitarBtn = document.getElementById('habilitarBtn');

        // Agregar un evento de clic al botón de deshabilitar
        deshabilitarBtn.addEventListener('click', function() {
            input.disabled = true;
        });

        // Agregar un evento de clic al botón de habilitar
        habilitarBtn.addEventListener('click', function() {
            input.disabled = false;
        });

        //LocalStorage
        //Ejercicio 1
         // Obtener el input y los botones por sus IDs
         /* const correoInput = document.getElementById('correo');
         const guardarBtn = document.getElementById('guardarBtn');
         const eliminarBtn = document.getElementById('eliminarBtn');
         const contenedorCorreo = document.getElementById('contenedorCorreo');
 
         // Función para mostrar el correo guardado en localStorage
         function mostrarCorreoGuardado() {
             const correoGuardado = localStorage.getItem('correo');
             if (correoGuardado) {
                 // Crear elementos para mostrar el correo y los botones
                 const correoElement = document.createElement('p');
                 const guardarBtnDOM = document.createElement('button');
                 const eliminarBtnDOM = document.createElement('button');
 
                 // Establecer el texto de los elementos
                 correoElement.textContent = `Correo guardado: ${correoGuardado}`;
                 guardarBtnDOM.textContent = 'Guardar Correo';
                 eliminarBtnDOM.textContent = 'Eliminar Correo';
 
                 // Agregar un evento de clic al botón de guardar
                 guardarBtnDOM.addEventListener('click', function() {
                     localStorage.setItem('correo', correoInput.value);
                     mostrarCorreoGuardado();
                 });
 
                 // Agregar un evento de clic al botón de eliminar
                 eliminarBtnDOM.addEventListener('click', function() {
                     localStorage.removeItem('correo');
                     contenedorCorreo.innerHTML = '';
                 });
 
                 // Agregar los elementos al contenedor
                 contenedorCorreo.appendChild(correoElement);
                 contenedorCorreo.appendChild(guardarBtnDOM);
                 contenedorCorreo.appendChild(eliminarBtnDOM);
             }
         }
 
         // Agregar un evento de clic al botón de guardar
         guardarBtn.addEventListener('click', function() {
             localStorage.setItem('correo', correoInput.value);
             mostrarCorreoGuardado();
             correoInput.value = '';
         });
 
         // Agregar un evento de clic al botón de eliminar
         eliminarBtn.addEventListener('click', function() {
             localStorage.removeItem('correo');
             contenedorCorreo.innerHTML = '';
         });
 
         // Mostrar el correo guardado al cargar la página
         window.addEventListener('load', mostrarCorreoGuardado);*/
// Obtener el input y los botones por sus IDs
const correoInput = document.getElementById('correo');
const guardarBtn = document.getElementById('guardarBtn');
const eliminarBtn = document.getElementById('eliminarBtn');
const contenedorCorreo = document.getElementById('contenedorCorreo');

// Variable para almacenar el correo seleccionado
let correoSeleccionado = localStorage.getItem('correo');

// Función para mostrar el correo guardado en localStorage
function mostrarCorreoGuardado() {
    const correoGuardado = localStorage.getItem('correo');
    if (correoGuardado) {
        // Crear elementos para mostrar el correo y los botones
        const correoElement = document.createElement('p');
        const guardarBtnDOM = document.createElement('button');
        const eliminarBtnDOM = document.createElement('button');

        // Establecer el texto de los elementos
        correoElement.textContent = `Correo guardado: ${correoGuardado}`;
        guardarBtnDOM.textContent = 'Guardar Correo';
        eliminarBtnDOM.textContent = 'Eliminar Correo';

        // Agregar un evento de clic al botón de guardar
        guardarBtnDOM.addEventListener('click', function() {
            localStorage.setItem('correo', correoInput.value);
            mostrarCorreoGuardado();
            correoInput.value = '';
        });

        // Agregar un evento de clic al botón de eliminar
        eliminarBtnDOM.addEventListener('click', function() {
            localStorage.removeItem('correo');
            contenedorCorreo.innerHTML = '';
        });

        // Agregar los elementos al contenedor
        contenedorCorreo.innerHTML = '';
        contenedorCorreo.appendChild(correoElement);
        contenedorCorreo.appendChild(guardarBtnDOM);
        contenedorCorreo.appendChild(eliminarBtnDOM);
    }
}

// Función para manejar el botón de guardar
function manejarGuardarBtn() {
    localStorage.setItem('correo', correoInput.value);
    mostrarCorreoGuardado();
    correoInput.value = '';
}

// Función para manejar el botón de eliminar
function manejarEliminarBtn() {
    localStorage.removeItem('correo');
    contenedorCorreo.innerHTML = '';
}

// Agregar eventos de clic a los botones
guardarBtn.addEventListener('click', manejarGuardarBtn);
eliminarBtn.addEventListener('click', manejarEliminarBtn);

// Mostrar el correo guardado al cargar la página
window.addEventListener('load', mostrarCorreoGuardado);