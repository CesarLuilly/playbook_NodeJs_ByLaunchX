//** 20 Funciones anonimas. **//
//==========================================================
console.log("*************************************************");
console.log("** Ejemplo 1 **");
//  //1. Creación de un objeto con propiedades

//  //Creación de un objeto
let myCar = new Object(); 

//  //Guardando un valor dentro del objeto creado
myCar.make = 'Ford'; 
myCar.model = 'Mustang';
myCar.year = 1969;

//  //Imprimiendo objeto
console.log(myCar) 

console.log("*************************************************");
console.log("** Ejemplo 2 **");
// 2. Declaración de un objeto con variables locales y públicas

//  //Creando una funcion flecha y la estamos encapsulando a traves de
//  //  una funcion anomina dado por "( )()"para que las variables que estan adentro
//  //   no puedan ser modificadas desde el exterior.
const myModule = (() => {

//  //Variables de contexto local o tambien le podriamos decir variables privadas.
 const privateFoo = "Soy un valor privado, solo me usan dentro de este objeto"
 const privateBar = [1,2,3,4]
 const baz = "Soy un valor que va a ser expuesto"

//  //La variable exported va a almacenar un objeto que dentro tiene variables
//  //   para ese objeto.
 const exported = {
    //  //A traves de este objeto vamos a hacer como una simulacion de 
    //  //  variables publicas, ya que estos son vistos desde el exterior
    //  //  cuando retornemos este objeto en la funcion flecha.
    publicFoo: "Valor público, pueden verme desde donde me llamen",
    publicBar: "Otro valor público",
    publicBaz: baz
 }

//  //Exposicion de la variable exported para que afuera pueda manipular
//  //  las propiedades de ese objeto exported.
 return exported
})();

console.log(myModule)

