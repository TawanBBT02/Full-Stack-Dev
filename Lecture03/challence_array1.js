let values1 = ["Apple", 1, false];
let values2 = ["Fries", 1, "Apple"];
let values3 = ["Mars", 1, "Apple"];


const findCommonElements = (arr1, arr2, arr3) => {
    let commonElements = [];    
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i]) && arr3.includes(arr1[i])) {
      commonElements.push(arr1[i]);
    }
  }
  return commonElements;
};

const result = values1.filter(value => values2.includes(value) && values3.includes(value));

for (let i = 0; i < values1.length; i++) {
    if (values2.includes(values1[i]) && values3.includes(values1[i])) {
        console.log(`Common element found: ${values1[i]}`);
    }
}

for (let val1 of values1) {
    for (let val2 of values2) {
        for (let val3 of values3) {
            if (val1 === val2 && val1 === val3) {
                console.log(`Common element found using nested loops: ${val1}`);
            }
        }   
    }
}


console.log(findCommonElements(values1, values2, values3));
console.log(result);

