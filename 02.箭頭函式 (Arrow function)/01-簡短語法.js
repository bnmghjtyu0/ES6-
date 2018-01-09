// ES5
// var callSomeone = function(someone) {
//   return someone + '吃飯了'
// }

// ES6
// 正常寫法 大括號需要有 return
var callSomeone = (someone) => {
  return someone + '吃飯了';
}
// 縮寫，單一行陳述不需要大括號 {} 也就不用 return 了
var callSomeone = (someone) => someone + '吃飯了';

// 再縮寫 只有一個參數可以不用加括號
var callSomeone = someone => someone + '吃飯了';

// 沒有參數時，一定要有括號
var callSomeone = () => '小明! 吃飯了'

