const startTime = Date.now();

function someHeavyTask(){
    let result = 0;
    for (let i = 0; i < 4e7; i++){
        Math.sqrt(i)
    }
}


someHeavyTask()
const endTime = Date.now();

const duration = endTime - startTime;

console.log(`Execution time : ${duration} ms`)
