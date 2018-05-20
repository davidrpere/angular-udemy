"use strict";
function activar(quien, objeto = "batseñal", momento) {
    let mensaje;
    if (momento) {
        mensaje = ` ${quien} activó la ${objeto} en la ${momento}`;
    }
    else {
        mensaje = ` ${quien} activó la ${objeto}`;
    }
    console.log(mensaje);
}
activar("Gordon", "batseñal", "tarde");
