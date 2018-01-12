

// 第一個 then 取得資料
// 第二個 then 取得轉換格式後的資料-此範例為轉 json() 格式
// 還有 json()、blob()、text()、formData()、arrayBuffer()

fetch('https://randomuser.me/api/', {})
.then((response) => {  
  return response.json()
}).then((jsonData) => {
  console.log(jsonData)
}).catch((err) => {
  console.log('錯誤', err)
})