let index = 0;
const array = [1, 2, 3, 4, 5];

// ### while
// while (index < array.length) {
//   console.log(array[index]);
//   index++;
// }

// ### for
// for (let i = 0; index < array.length; index++) {
//   console.log(index);
// }

// ### forEach
// array.forEach(function(current_value, index, array) {
//   console.log(`At index ${index} in array ${array} the value is ${current_value}`)
// })

// ### map 陣列計算
// const square = x => Math.pow(x,2);
// const squares = array.map(square);
// console.log(squares)

// ### reduce 陣列加法
// const sum = (x,y) => x+y;
// const array_sum = array.reduce(sum,0);
// console.log(`The sum of array: ${array} is ${array_sum}`)

// ### filter 過濾掉奇數
// const even = x => x % 2 === 0;
// const even_array = array.filter(even);
// console.log(`Even numbers in array ${array}: ${even_array}`);

// ### every 用來判斷陣列內的 所有數值 是否成立
// arrays = [...array, 8, 9];
// const under_seven = x => x < 7;
// if (arrays.every(under_seven)) {
//   console.log("每一個數值都小於 7");
// } else {
//   console.log("不是每個數值都小於 7");
// }

// ### some 用來判斷陣列內的 某一數值 是否成立
// arrays = [...array, 8, 9];
// const over_seven = x => x > 7;
// if (array.some(over_seven)) {
//   console.log("有一個數值大於 7");
// } else {
//   console.log("沒有數值大於 7");
// }

// ### indexOf 第 n 個位置的值，如果沒有值回傳 -1
// var idx = array.indexOf(n);
// console.log(idx);

// ### array.lastIndexOf(element, index)
// searchElement: 和陣列裡面的數值是否一樣 ===
// 如果true 執行 index
// var idx = array.lastIndexOf(6,5)
// console.log(idx);

// ### 進階應用 indexOf + filter
let arrays = [6, ...array];
const a = arrays.filter((current_value, index, array) => {
  return array.indexOf(current_value) === index;
});
const asort = a.sort(); // 改變排序
console.log(asort);
