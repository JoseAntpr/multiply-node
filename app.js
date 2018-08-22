const argv = require('yargs')
            .command('listar', 'Imprime en consola la tabla de multiplicar', 
            {
                base: { 
                    demand: true,
                    alias: 'b'
                },
                limite: {
                    alias: 'l',
                    default: 10
                }
            })
            .help()
            .argv;
const multiplicar = require('./multiplicar/multiplicar');

// let argv = process.argv;
// let param = argv[2];
// let base = param.split('=')[1];


console.log(argv.base);
console.log(argv.limite);

// multiplicar.crearArchivo( base )
//     .then( resp => console.log(resp))
//     .catch( err => console.log(err));
