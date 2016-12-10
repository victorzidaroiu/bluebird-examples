import fs from 'fs';
import Promise from 'bluebird';

export default async ({ file = 'promisify.txt', content = 'Default text' }) =>
  new Promise((resolve, reject) => {
    const filePath = `${__dirname}/../../data/${file}`;
    const readFile = Promise.promisify(fs.readFile);
    const writeFile = Promise.promisify(fs.writeFile);

    console.log('');
    console.log('Promisify example');
    console.log('===================');

    writeFile(filePath, content)
      .then(() => {
        readFile(filePath, 'utf8')
          .then((fileContents) => {
            console.log(`${file} contains:`);
            console.log(fileContents);
            resolve();
          })
          .catch((e) => {
            reject(e);
          });
      });
  });
