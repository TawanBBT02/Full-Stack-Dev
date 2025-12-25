const names = ["Justin","Sarah","Chistopher"];

for (let i = 0; i < names.length; i++){
    console.log(names[i]);
};

names.forEach(names => {
    console.log(names,'s');
});

names.forEach(myFunc);

function myFunc(name){
    console.log(name,"a");
};

for (let name of names){
    console.log(name,"f");
};