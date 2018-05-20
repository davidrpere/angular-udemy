let nombre:string = "James";
let apellido:string = "Howlett";
let edad:number = 50;
let apodo:string = "Lobezno";

//let texto:string = "Hola " + wolverine.nombre + " " + wolverine.apellido + "(" + wolverine.edad+ ")";
let texto:string = `Hola, ${ nombre } ${ apellido } (${ edad })`;

console.log(texto);
