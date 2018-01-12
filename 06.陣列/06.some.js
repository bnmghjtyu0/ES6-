
// some 部分為 true，回傳 true; 全部 false 則回傳 false
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
var ans = people.some((item, index, array) => {
  return item.money > 10000;
});
console.log(ans);
