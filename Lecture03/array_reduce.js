const number = [15,16,17,18,19];

const sum = 
number.reduce((accumalator,currentValue) => {
    return accumalator + currentValue;
});

console.log(sum)
