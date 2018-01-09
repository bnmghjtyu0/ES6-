const people = [
  {
    name: "小明",
    friends: 2
  },
  {
    name: "阿姨",
    friends: 999
  },
  {
    name: "杰倫",
    friends: 0
  }
];

// 練習一 for迴圈

for (let i = 0, Len = people.length; i < Len; i++) {
  let str = "";
  str += `<li>${people[i].name}有 ${people[i].friends} 個好朋友</li>`;
  console.log(str);
}

// 練習二 加入 ~ 

let ul2 = `
${people.map(person => `<li>${person.name}</li>`).join(' ~ ')}
`
console.log(ul2)