import fs from 'fs';
import Promise from 'bluebird';

const readFile = Promise.promisify(fs.readFile);

export default async files => new Promise((resolve, reject) => {
  console.log('');
  console.log('Spread example');
  console.log('===================');

  Promise
    .delay(500)
    .then(() => files.map(file => readFile(`${__dirname}/../../data/${file}`, 'utf8')))
    .all()
    .then((filesContent) => {
      console.log(filesContent.join(' '));
      resolve();
    })
    .catch((e) => {
      reject(e);
    });
});
