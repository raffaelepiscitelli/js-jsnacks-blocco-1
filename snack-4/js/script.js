const newArray = [];

for (let i = 1; i <= 100; i++) {
    if (i % 7 === 0 || i % 8 === 0){
        newArray.push(i);
    }
}

console.log(newArray);