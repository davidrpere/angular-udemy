interface Xmen {
  nombre:string,
  poder:string
}

function enviarMision( xmen : Xmen ){
  console.log("Enviando a misión a: " + xmen.nombre);
}

function enviarCuartel( xmen : Xmen){
  console.log("Enviando a cuartel a: " + xmen.nombre);
}

let Wolverine:Xmen = {
  nombre: "Wolverine",
  poder: "Regeneración"
}

enviarMision(Wolverine);
enviarCuartel(Wolverine);
