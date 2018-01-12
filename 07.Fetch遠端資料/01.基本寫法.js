// 隨機用戶產生器
// https://randomuser.me/

fetch('https://randomuser.me/api/', {})
.then((response) => {
  console.log(response);
}).catch((err) => {
  console.log('錯誤:', err);
});