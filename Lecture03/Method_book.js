const book = {
    title: "1984",
    author: "George Orwell",
    isAvailable: true,

    checjOut: function() {
        this.isAvailable = false;
    },

    checjIn: function() {
        this.isAvailable = true;
    }
}

console.log(book.isAvailable); // true
book.checjOut();
console.log(book.isAvailable);
book.checjIn();
console.log(book.isAvailable); // true
