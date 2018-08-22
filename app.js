const multiplicar = require('./multiplicar/multiplicar');

let argv = process.argv;
let param = argv[2];
let base = param.split('=')[1];

multiplicar.crearArchivo( base )
    .then( resp => console.log(resp))
    .catch( err => console.log(err));
