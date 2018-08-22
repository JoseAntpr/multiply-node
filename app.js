const {crearArchivo, listarTabla} = require('./multiplicar/multiplicar');
const argv = require('./config/yargs').argv;

let comando = argv._[0];

// argv from process
// ==============================
// let argv = process.argv;
// let param = argv[2];
// let base = param.split('=')[1];


console.log('Base',argv.base);
console.log('Limite', argv.limite);

switch( comando ) {
    case 'listar':
        console.log('Listar');
        listarTabla( argv.base, argv.limite );
        break;
    case 'crear':
        console.log('Crear');
        crearArchivo( argv.base, argv.limite )
            .then( resp => console.log(resp))
            .catch( err => console.log(err));
        break;
    default:
        console.log('Comando no reconocido');

}




