
// filter 可以用來過濾陣列中符合條件的物件
let people = [
  {
    name: "小明",
    money: 500
  },
  {
    name: "漂亮阿姨",
    money: 3000
  },
  {
    name: "杰倫",
    money: 60000
  }
];

var filterEmpty = people.filter((item,index,array) => item.money > 5000)
console.log(filterEmpty)