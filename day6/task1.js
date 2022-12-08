const fs = require('fs');
const data = fs.readFileSync('./day6/data.txt','utf8');

let pakiet = [ data[0], data[1], data[2], data[3]];
let count = 4;

for (let i = 4; i<data.length; i++) {
  if (!(pakiet.includes(data[i])) && (pakiet.length === new Set(pakiet).size)) {
    break;
  } else {
    pakiet.shift();
    pakiet.push(data[i]);
    count++;
  }
}
console.log(count);