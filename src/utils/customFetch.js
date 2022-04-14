let is_ok = true;

const {data} = require('./productos.js');

const customFetch = () => {
    return new Promise((resolve, reject) => {
        if (is_ok) {
            resolve(data);
        } else {
            reject('KO');
        }
    })
}

export default customFetch