// every 驗證全部的結果，當全部的值都為 true 時，最終會得到 true;其中一個為 false，則回傳 false
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

var ans = people.every((item, index, array) => {
  return item.money > 10000;
});
console.log(ans)
var ans2 = people.every((item,index,array) => {
  return item.money > 300;
})
console.log(ans2) //true 大家都有超過 300