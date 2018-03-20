const getJSON = function(url) {
  // 建立 promise
  const promise = new Promise(function(resolve, reject) {
    const handler = function() {
      if (this.readyState !== 4) {
        return;
      }
      if (this.status === 200) {
        resolve(this.response);
      } else {
        reject(new Error(this.statusText));
      }
    };

    // 宣告 ajax
    const client = new XMLHttpRequest();
    client.open("GET", url);
    client.onreadystatechange = handler;
    client.responseType = "json";
    client.setRequestHeader("Accept", "application/json");
    client.send();
  });
  return promise;
};

// then 是定義在 Promise.prototype 上的
// then 方法(resolved, rejected)回調函數
// then 方法返回可用串聯式寫法

// 串聯式寫法
// 第一个回调函数完成以后，会将返回结果作为参数，传入第二个回调函数。

// 執行 getJSON 異步方法
getJSON("https://gank.io/api/random/data/福利/20")
  .then(post => getJSON(post.commentURL))
  .then(
    comments => console.log("resolved: ", comments),
    err => console.log("rejected: ", err)
  );
