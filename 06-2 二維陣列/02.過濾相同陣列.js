// 題目: 刪除 array 相同的數值
let array = [[0, 0], [0, 1], [1, 0], [1, 1], [0, 0], [-1, 0], [-1, 0]];

// 第一步: 陣列轉字串 forEach
let arrayTostring = obj => Object.keys(obj).map(k => obj[k].toString());
const resultArray = arrayTostring(array)

// 第二步: 重複數據刪除 [...new Set(array)]
var deduped = [...new Set(resultArray)];

// 第三步: 二維字串轉陣列
let string2array = deduped.map( o => {
  let [x, y] = o.split(",");
  return [+x, +y];
});

// End
// [[0, 0], [0, 1], [1, 0], [1, 1], [-1, 0]];
