// function 使用this 需要賦予 that,self,vm ...
var auntie = {
  name: "漂亮阿姨",
  callName() {
    var that = this;
    setTimeout(function() {
      console.log(that);
    }, 10);
  }
};
auntie.callName();

// Arrow function 不需要
var abei = {
  name: "帥氣阿伯",
  callName() {
    setTimeout(() => {
      console.log(this);
    }, 10);
  }
};
abei.callName();