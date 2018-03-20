// Promise 構造函數
// resolve 未完成 => 成功 (pending => resolved)
// reject  未完成 => 失敗 (pending => rejected)

// 1.生成 promise
const promise = new Promise(function(resolve, reject) {
  if (/*一步操作成功*/) {
    resolve(value);
  } else {
    reject(error);
  }
});

// 2. 回調函數
// promise生成後，可以用 then 方法分別指定 resolved 狀態和 rejected 狀態的回調函數
promise.then(function(value){
  //success
},function(error){
  //failure
});