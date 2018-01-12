
// forEach
let people = [
  {
    name: "小明",
    money: 500
  },
  {
    name: "漂亮阿姨",
    money: 3000
  },
  {
    name: "杰倫",
    money: 60000
  }
];

people.forEach(person => console.log(`${person.name}有${person.money}元`));

people.forEach((item, index, array) => {
  console.log(item);
});
