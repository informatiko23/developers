//Persona que administra el contenido
let person = {
	nombre: "Rafa",
	apellido: "Lopez",
	edad: "29"
}

console.log(person);

//Para el acceso de un cliente
var edad = prompt("Indique su edad");

if (edad>=18) {
   alert("bienvenido");
} else {
	alert("lo siento, no puedes tener acceso");
	window.close();
}

console.log(edad);

//Desde aqui para jugar
  var dia = 3;

  switch(dia) {
  	case 1: console.log("lunes");
  	break;

  	case 2: console.log("martes");
  	break;

  	case 3: console.log("miercoles");
  	break;

  	case 4: console.log("jueves");
  	break;

  	case 5: console.log("viernes");
  	break;
  }

let a = 2;
let b = 3;
let c = 7;

//Para funciones
  function suma(numero1,numero2) {
  	  let resultado = numero1 + numero2;
  	  return resultado;
  }

console.log(suma(b,c));

//Para bucles

  while(a<c) {
  	console.log(`a es menor que c`);
  	a++
  }

  do {
  	console.log(`b es mayor que a`);
  } while(b>a);

  for(let i=0; i<c; i++) {
  	console.log(`el valor de i es ${i}`);
  }

  //Listas


  var lista = [5,96,87,452,145];


  function ordenar(a,b) {
  	return b-a;
  }

  lista.sort(ordenar);

  console.log(lista);