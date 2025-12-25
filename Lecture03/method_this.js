const cat = {
    name: 'Pipey',
    age: 8,
    whatName : function() {
     
        return this.name;
    }

};

const dog = {
    name: 'Buddy',
    whatName : cat.whatName
};

console.log(cat.whatName()); // Output: Pipey
console.log(dog.whatName()); // Output: Buddy