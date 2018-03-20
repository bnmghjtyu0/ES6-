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
getJSON('https://gank.io/api/random/data/福利/20').then(function(json){
  console.log('Conents:' + json.results[0].url);
}, function(error){
  console.error('出錯了',error)
})
