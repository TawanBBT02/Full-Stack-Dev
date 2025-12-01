function generateTempID(){
    const randomPart = Math.random().toString(36).substring(2, 8);
    return randomPart.toUpperCase()
}

const orderId = generateTempID();
console.log(`Generated Order ID : ${orderId}`)