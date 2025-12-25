const bookObject = {
    title: "Becoming",
    auther: "Michelle Obama",
    isAvailable: false
};

const bookJSON = JSON.stringify(bookObject);

console.log(bookJSON);

console.log(typeof bookJSON); // "string"

const receivedBookObject = JSON.parse(bookJSON);

console.log(receivedBookObject);
console.log(receivedBookObject.title);
console.log(receivedBookObject.auther);
console.log(receivedBookObject.isAvailable);

console.log(typeof receivedBookObject); // "object"