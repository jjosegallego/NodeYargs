const fs = require('fs');


let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('No es un número');
            return;
        }

        let data = '';
        for (let i = 0; i < limite; i++) {
            data += (`${base}*${i+1}=${base*(i+1)}\n`);
        }
        fs.writeFile(`tabla-${base}.txt`, data, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(`tabla-${base}.txt`);
            }

        });

    })
}

module.exports = {
    crearArchivo
}