import examples from './examples';

(async () => {
  await examples.pause(3000);

  await examples.promisify({ file: 'file1.txt', content: 'The quick' });
  await examples.promisify({ file: 'file2.txt', content: 'brown fox jumps' });
  await examples.promisify({ file: 'file3.txt', content: 'over the lazy dog.' });

  await examples.spread(['file1.txt', 'file2.txt', 'file3.txt']);
})();
