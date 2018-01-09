// arguments
// function 才可以執行
let originCash = 1000;
const updateEasyCard = function() {
  let cash = 0;
  console.log(arguments);
}
updateEasyCard(10,50,100,50,5,1,5,1,1,500);

// Arrow function 沒有 arguments 參數
let originCash = 1000;
const updateEasyCard = () => {
  let cash = 0;
  console.log(arguments);
}
updateEasyCard(10,50,100,50,5,1,5,1,1,500);