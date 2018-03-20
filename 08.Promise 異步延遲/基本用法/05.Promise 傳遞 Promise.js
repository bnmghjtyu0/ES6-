const p1 = new Promise(function(resolve, reject) {
  setTimeout(() => reject(new Error("fail")), 3000);
});

const p2 = new Promise(function (resolve, reject) {
  setTimeout(() => reject(p1), 1000)
})

p2
  .then(result => console.log(reuslt))
  .catch(error => console.log(error))