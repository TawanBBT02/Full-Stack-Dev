const status = 200;

if (status === 200){
    console.log("OK")
}else if (status === 400){
    console.log("Error!")
}else{
    console.log("Unknow")
}

switch(status){
    case 200:
        console.log("OK")
        break;
    case 400:
        console.log("Error!")
        break;
    default:
        console.log("Unknow")
}

const message = (status === 200) ? "OK!" : "Error";
console.log(message);

