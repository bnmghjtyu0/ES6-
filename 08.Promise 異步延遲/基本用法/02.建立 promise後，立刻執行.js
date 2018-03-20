// 建立promise 立刻執行
let promise = new Promise(function(resolve, reject) {
  console.log('Promise');
  resolve();
})

// 所有同步任務執行完才會執行 then
promise.then(function(){
  console.log('resolved')
})
console.log('Hi!')

// Promise
// Hi
// resolved