const caseName = process.env.CASE;

if (caseName === 'error') {
  throw Error('error in setup file');
}

if (caseName === 'async') {
  await new Promise((res) => setTimeout(res, 1000));
}

if (caseName === 'interval') {
  setInterval(() => {
    console.log('tick');
  }, 500);
}
