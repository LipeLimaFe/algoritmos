const numbers = [2, 25, 8, 12, 16, 23, 2, 56, 1, 91];
const key = 23;
const indexOfKey = numbers.indexOf(key); // Use key ao invés de 23 aqui
const middle = numbers.findIndex(num => num === key);

const find = () => {
    return numbers.map((number, index) => {
        if (index === indexOfKey - 1) {
            return number;
        } else if (index === indexOfKey + 1) {
            return number;
        } else {
            return null;
        }
    })
}

console.log(find());




