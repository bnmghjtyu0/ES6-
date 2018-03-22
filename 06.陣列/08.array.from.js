// 1.字串轉陣列
console.log(Array.from("foo"));
// 2.陣列運算式
console.log(Array.from([1, 2, 3], x => Math.pow(x, 4)));
console.log(Array.from([1, 2, 3], x => x + x));

// 3.集合產生陣列
var s = new Set(["foo", window]);
console.log(Array.from(s));
// 4.映射產生陣列 [{1 => 2},{2 => 4},{4 => 8}]
var m = new Map([[1, 2], [2, 4], [4, 8]]);
console.log(Array.from(m));
// 5.類陣列物件產生陣列
function f() {
  return Array.from(arguments);
}
console.log(f(1, 2, 3));

// 6.箭頭函式及 Array.from
var a = Array.from({ length: 10 }, (v, i) => i);
console.log(a);

// 7.箭頭函式
const chunk = (arr, size) => 
  Array.from({ length: Math.ceil(arr.length / size) }, (v, i) => 
    arr.slice(i * size, i * size + size)
  );

console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8, 9], 2));
