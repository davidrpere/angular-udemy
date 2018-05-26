function enviarMision(xmen) {
    console.log("Enviando a misión a: " + xmen.nombre);
}
function enviarCuartel(xmen) {
    console.log("Enviando a cuartel a: " + xmen.nombre);
}
var Wolverine = {
    nombre: "Wolverine",
    poder: "Regeneración"
};
enviarMision(Wolverine);
enviarCuartel(Wolverine);
