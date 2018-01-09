var auntie = {
  name: "漂亮阿姨",
  callName() {
    setTimeout(() => {
      console.log(this); //{name:'漂亮阿姨',callName()}
    }, 10);
  }
};
auntie.callName();

