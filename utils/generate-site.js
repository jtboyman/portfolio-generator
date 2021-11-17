const fs = require('fs');

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            //if there's an error, reject the promise and send the error to the Promise's .catch() method
            if (err) {
                reject(err);
                //return out of the function so we don't also run resolve
                return;
            }

            //if everything went well, resolve the Promise and send the successful data to the .then() method
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

const copyFile = () => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./src/style.css', './dist/style.css', err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'File copied!'
            });
        });
    });
};

/* long version
module.exports = {
    writeFile: writeFile,
    copyFile: copyFile,
};*/

//shorthand export
module.exports = {writeFile, copyFile};