const numbers = [2,5,3,0,2,3,0,3];
const count_array = [0,2,3,4,7,7];

const out = numbers.map(num => num + count_array[num]);

console.log(out);
