const fullName = "  Waranon   Jaitong   ";
console.log(`Full Name : ${fullName}`)

const cleanName = fullName.trim();
console.log(`Clean Name : ${cleanName}`)

const nameParts = cleanName.split(' ');
console.log(`Name Part : ${nameParts}`)

const finalParts = nameParts.filter(Boolean);
console.log(`Final Part : ${finalParts}`)

const firstName = finalParts[0];
console.log(`First Name : ${firstName}`)

console.log(`Hello, ${firstName}`)