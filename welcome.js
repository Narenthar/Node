console.log("Hai");

const marks = [80,85,90,93,79];
console.log(Math.max(...marks))
// console.log(global)
const [ , , first,second] = process.argv;

const sum = (a,b)=> a + b;
console.log(sum(+first,+second))