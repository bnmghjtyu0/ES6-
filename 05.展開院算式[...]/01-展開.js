
// 兩個陣列合併
let groupA = ["小明", "杰倫", "阿姨"];
let groupB = ["老媽", "老爸"];
let groupAll = [...groupA, ...groupB];

// ... 到底做了什麼事情!? 它其實一次又一次的 return 陣列中的值。

let groupC = groupA;
groupC.push('小明2.0');
console.log(groupA)