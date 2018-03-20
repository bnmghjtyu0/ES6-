// 建立promise 立刻執行
let promise = new Promise((resolve, reject) => {
  console.log("Promise");
  resolve();
});


// 所有同步任務執行完才會執行 then
promise
  .then(() => console.log("resolved"))
  .catch(() => console.log("error"))
  .finally(() => {
    console.log("finally");
  });
console.log("Hi!");

// Promise
// Hi
// resolved
// finally

// finally = Promise 對象最後狀態
