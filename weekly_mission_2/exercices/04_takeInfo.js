const explorers = [
    {
      name: "Explorer 1",
      exercises_completed: 10,
      rate: 99,
      city: "CDMX",
      stack: [
        "js",
        "c#"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: true,
          exercisesFinished: true
        }
      }
    },
    {
      name: "Explorer 2",
      exercises_completed: 9,
      city: "Veracruz",
      rate: 50,
      stack: [
        "js"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: false
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    },
    {
      name: "Explorer 3",
      exercises_completed: 3,
      city: "Sonora",
      rate: 100,
      stack: [
        "elixir"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: false
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    }
   ]
/*
Sobre esta lista, realiza lo siguiente:

1.- Imprime el nombre (propiedad name) de cada explorer en la lista, 
    usa FOR EACH
2.- Imprime el stack de cada explorer, usa FOR EACH
3.- Crea una nueva lista con las listas de stacks de cada explorer, 
    usa MAP
4.- Obtén la lista de explorers que tengan en su stack "js", 
    usa FILTER (para validar un elemento en un lista se usa el método includes)
5.- Busca el primer explorer que sea de la CDMX, usa FIND
6.- Obtén la suma de todos los exercises_completed, usa REDUCE
7.- Obtén la validación si al menos uno de los explorers tiene 
    la propiedad exercisesFinished en frontend como true, 
    usa SOME
8.- Obtén la validación si todos los explorers tienen la 
    propiedad isFinished del onboarding como true. Usa EVERY.
*/


// 1.- Imprime el nombre (propiedad name) de cada explorer en la lista, 
//     usa FOR EACH
console.log("********************************************************");
console.log("Ejercicio 1");
explorers.forEach(explorer => {
    console.log("Nombre: " + explorer.name);
})

// 2.- Imprime el stack de cada explorer, usa FOR EACH
console.log("********************************************************");
console.log("Ejercicio 2");
explorers.forEach(explorer => {
    console.log("---");
    let strStack = "";    
    explorer.stack.forEach(stack => {
        strStack = strStack + " " +  stack
    })
    console.log(strStack);
});

// 3.- Crea una nueva lista con las listas de stacks de cada explorer, 
//     usa MAP
console.log("********************************************************");
console.log("Ejercicio 3");
const stackEachExplorer = explorers.map( explore => {
    const listStack = explore.stack.map((stack) => stack) 
    return listStack   
}
    
);
console.log(stackEachExplorer);

// 4.- Obtén la lista de explorers que tengan en su stack "js", 
//     usa FILTER (para validar un elemento en un lista se usa el método includes)
console.log("********************************************************");
console.log("Ejercicio 4");
const onlyJs = explorers.filter(explore => 
    explore.stack.includes("js")
    );
console.log(onlyJs);

// 5.- Busca el primer explorer que sea de la CDMX, usa FIND
console.log("********************************************************");
console.log("Ejercicio 5");
const exploreCDMX = explorers.find(explore => explore.city == "CDMX");

console.log(exploreCDMX);

// 6.- Obtén la suma de todos los exercises_completed, usa REDUCE
console.log("********************************************************");
console.log("Ejercicio 6");
const result = explorers.reduce((acc, element) => 
    acc + element.exercises_completed, 0
);
console.log(result);

// 7.- Obtén la validación si al menos uno de los explorers tiene 
//     la propiedad exercisesFinished en frontend como true, 
//     usa SOME
console.log("********************************************************");
console.log("Ejercicio 7");
const boolAreSomeTrue = explorers.some(a => 
    a.missions.frontend.exercisesFinished === true)
console.log(boolAreSomeTrue);

console.log("********************************************************");
console.log("Ejercicio 8");
// 8.- Obtén la validación si todos los explorers tienen la 
//     propiedad isFinished del onboarding como true. Usa EVERY.
const boolAreAllTrue = explorers.every(expcesar => 
    expcesar.missions.onboarding.isFinished === true
);
console.log(boolAreAllTrue);

