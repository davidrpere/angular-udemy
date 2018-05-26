
let avenger = {
  nombre: "Tony",
  alias: "Iron Man",
  poder: "Millonario"
}

let { nombre, alias, poder} = avenger;

console.log(nombre, alias, poder);

let avengers = ["thor", "Steve", "Bruce"];

let [,,hulk] = avengers;

console.log(hulk);
