
// map 會回傳 return 的物件值，用來處理陣列回傳新值產生一個新陣列
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
var mapEmpty = people.map((item,index,array) => {
  item.money = item.money + 500;
  return item;
})
console.log(mapEmpty)