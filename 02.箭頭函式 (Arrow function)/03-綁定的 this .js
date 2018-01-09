var name = "全域阿婆";
var auntie = {
  name: "漂亮阿姨",
  callName: function() {
    console.log("1", this.name);
    setTimeout(() => {
      console.log("2", this.name);
      console.log("3", this);
    }, 10);
  },
  callName2: () => {
    console.log("4", this.name);
    setTimeout(() => {
      console.log("5", this.name);
      console.log("6", this);
    }, 10);
  }
};

auntie.callName();
auntie.callName2();