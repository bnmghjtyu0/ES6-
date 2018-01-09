// let 與 for loop

for (var i = 0; i < 10; i++) {
  console.log(i);
  setTimeout(function() {
    console.log("這執行第" + i + "次");
  }, 10);
}

for (let i = 0; i < 10; i++) {
  console.log(i);
  setTimeout(function() {
    console.log("這執行第" + i + "次");
  }, 10);
}


// 用 var 也可以辦得到
for (var i = 0; i < 10; i++) {
  (function (j) {
    setTimeout(function() {
      console.log('這執行第'+ j + '次');
    }, 10);
  })(i);
}
