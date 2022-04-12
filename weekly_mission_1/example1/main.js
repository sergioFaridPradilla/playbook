
// 1.- Creación de in objeto con propiedades


let myCar = new Object(); // Creación de un objeto
myCar.make = 'Ford'; // guardando valor dentro de un objeto creado
myCar.model = 'Mustang';
myCar.year = 1969;

console.log(myCar);  // imprimiendo objeto

// 2. Declaración dde un objeto con variables locales y públicas

const myModule = (() => {
    
    //variables de contexto local
    const privateFoo = "Soy un valor privado, solo me usan dentro de este objeto";
    const privateBar = [1,2,3,4];
    const baz = "Soy un valor que va ser expuesto";

    //variables para guardar llas variables locales
    const exported = {
        publicFoo: "Valor público, pueden verme desde donde me llamen",
        publicBar: "Otro valor público",
        publicBaz: baz
    };

    //Exposición de variables locales
    return exported;

}) 

console.log(myModule())
