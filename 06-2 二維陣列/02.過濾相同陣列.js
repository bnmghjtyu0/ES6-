// 二維陣列相等

let Array = [[0, 0], [0, 1], [1, 0], [1, 1], [0, 0], [-1, 0], [-1, 0]];
let str = "";
let resultArray = [];

// 第一步: 陣列轉字串 forEach
Array.forEach((current_value, index, array) => {
  str = current_value.toString();
  resultArray.push(str);
});
// 第二步: 重複數據刪除 array.filter
let deduped = resultArray.filter((current_value, index, array) => {
  return array.indexOf(current_value) == index;
});
// ["0,0", "0,1", "1,0", "1,1", "-1,0"]

// 第三步: 二維字串轉陣列

let string2array = deduped.map( o => {
  let [x, y] = o.split(",");
  return [+x, +y];
});

// End
// [[0, 0], [0, 1], [1, 0], [1, 1], [-1, 0]];
