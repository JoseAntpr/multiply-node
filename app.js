const multiplicar = require('./multiplicar/multiplicar');

let base = 3;

multiplicar.crearArchivo( base )
    .then( resp => console.log(resp))
    .catch( err => console.log(err));
