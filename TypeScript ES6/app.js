var prom1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Promesa terminada");
        //Termina bien
        resolve();
        //Termina mal
        // reject();
    }, 1500);
});
console.log("Paso 1");
prom1.then(function () {
    console.log("Terminamos bien");
}, function () {
    console.log("Terminamos mal");
});
console.log("Paso 2");
