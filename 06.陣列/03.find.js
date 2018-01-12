
// find 用來搜尋符合條件的物件，僅能有一個，回傳 true 兩個以上，以第一個為優先
// 使用時機: 搜尋特定id
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

findEmpty = people.find((item,index,array) => {
  return item.name === '杰倫'
})
console.log(findEmpty)
