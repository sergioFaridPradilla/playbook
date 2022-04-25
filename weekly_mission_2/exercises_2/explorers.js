
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
          isFinished: false,
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
          exercisesFinished: true
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    }
   ]

  // console.log("\n1. Imprime el nombre (propiedad name) de cada explorer en la lista, usa FOR EACH")
  // explorers.forEach( (element) => console.log( element.name)) 

  // console.log("\n2. Imprime el stack de cada explorer, usa FOR EACH");
  // explorers.forEach( (element) => console.log(`${element.name} su stack ${element.stack}`))

  // console.log("\n3. Crea una nueva lista con las listas de stacks de cada explorer, usa MAP");
  // const explorers_stack = explorers.map( (explorer) => explorer.stack)
  // console.log(explorers_stack);

  // console.log("\n4. Obtén la lista de explorers que tengan en su stack 'js', usa FILTER (para validar un elemento en un lista se usa el método includes)");
  // const explorerJs = explorers.filter( (explorer) => explorer.stack.includes("js"))
  // console.log(explorerJs);

  // console.log("5. Busca el primer explorer que sea de la CDMX, usa FIND")
  // const explorer_city = explorers.find(element =>  element.city === "CDMX")
  // console.log(explorer_city);

  console.log("6. Obtén la suma de todos los exercises_completed, usa REDUCE");
  const reduce_exercises_completed = explorers.reduce( (b, elemen,) => elemen.exercises_completed + b, 0)
  console.log(reduce_exercises_completed);