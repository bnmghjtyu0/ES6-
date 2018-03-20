function timeout(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms, '123');
  });
}

timeout(1000).then((value) => {
  console.log(value);
});