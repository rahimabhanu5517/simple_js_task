const numbers = [1, 2, 3, 4, 5, 3, 6, 2, 8];
const uniqueNumbers = numbers.filter((value, index, array)=> {
    return array.indexOf(value) === index;
});

console.log(uniqueNumbers);