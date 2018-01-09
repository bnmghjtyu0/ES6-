
// var
function varMing() {
  var ming = "小名";
  if (true) {
    var ming = "小小";
    console.log(ming) //小小
  }
  console.log(ming); //小小
}

// let
function letMing() {
  let ming = "小明明";
  if (true) {
    let ming = "小啾啾";
    console.log(ming) //小啾啾
  }
  console.log(ming); //小明明
}
varMing();
letMing();
