let prop = "Ming";
let value = "小明";

let teamMember = {
  [prop]: value,
  [`${prop}_invert`]: value
    .split("")
    .reverse()
    .join("")
};
console.log(teamMember);
