const { crearArchivo } = require('./multiplicar/multiplicar');
const { argv } = require('./config/yars');
const colors = require('colors');

crearArchivo(argv.base, argv.limite)
    .then(archivo => {
        console.log(colors.green(`Archivo creado: ${ archivo }`));
    })
    .catch(err => {
        console.log(colors.red(err));
    });