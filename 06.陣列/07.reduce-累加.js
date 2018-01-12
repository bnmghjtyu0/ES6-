// reduce 接收到前一個回傳供下一個物件使用

// accumulator 前一個參數，如果是第一個陣列，值是另外傳入或初始化的值
// currentValue 當前變數
// currentIndex 當前索引
// array 全部陣列

// 使用時機: 累加與對比


let people = [
  {
    name: '小明',
    money: 500
  },
  {
    name: '漂亮阿姨',
    money: 3000
  },
  {
    name: '杰倫',
    money: 60000
  },
  {
    name: '老媽',
    money: Infinity
  }
];

people.pop() //老媽的錢滿出來了，先移除掉
var reducePlus = people.reduce((accumulator,currentValue,currentIndex,array) => {
  console.log(accumulator)
  return accumulator + currentValue.money  //和前一個值相加
},0) //初始化值為0
console.log(reducePlus)  //總和