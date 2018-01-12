let url = "https://hexschool-tutorial.herokuapp.com/api/signup";
fetch(url, {
  method: "POST",
  // headers 加入 json 格式
  headers: {
    "Content-Type": "application/json"
  },
  // body 將 json 轉字串送出
  body: JSON.stringify({
    email: "lovef1232e@hexschool.com",
    password: "12345678"
  })
})
  .then(response => {
    return response.json();
  })
  .then(jsonData => {
    console.log(jsonData);
  })
  .catch(err => {
    console.log("錯誤:", err);
  });
