// Promise.prototype.catch 方法是.then(null, rejection)的別名，用於指定發生錯誤時的回調函數
// http://es6.ruanyifeng.com/?search=promise&x=0&y=0#docs/promise#Promise-prototype-catch

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

// 執行 getJSON 異步方法
getJSON("https://gank.io/api/random/data/福利")
  .then(function(json) {
    console.log("Conents:" + json.results[0].url);
  })
  .catch(function(err) {
    console.log(err);
  });
