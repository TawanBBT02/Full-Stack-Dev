const guests = ['Alice', 'Bob', 'Charlie', 'David'];

let i = 0;

while (i < guests.length) {
    const guest = guests[i];

    if (guest === 'Charlie') {
        console.log(`Found, ${guest}!`);
        break;
    }
    i++;
}

console.log('---');

for (let j = 0; j < guests.length; j++) {
    const guest = guests[j];
    if (guest === 'Charlie') {
        console.log(`Welcome, ${guest}!`);
        break;
    }
}

for (const guest of guests) {
    if (guest === 'Charlie') {
        console.log(`Welcome, ${guest}!`);
        break;
    }
}