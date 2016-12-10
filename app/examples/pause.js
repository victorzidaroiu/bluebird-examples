import Promise from 'bluebird';

const pause = time => new Promise((resolve) => {
  setTimeout(resolve, time);
});

export default async (pauseTime = 2000) => {
  console.log('');
  console.log('Pause example');
  console.log('===================');
  console.log(`Pausing for ${pauseTime} ms`);

  await pause(pauseTime);

  console.log('Resuming script');
};
