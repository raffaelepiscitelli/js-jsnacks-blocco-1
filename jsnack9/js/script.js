let firstNumber = parseInt(prompt("Type a two-digit number"));
let secondnumber = parseInt(prompt("Type a four-digit number"));
let finalNumber = firstNumber;
for (let i = 0; i < 1 ; i++){
    finalNumber = finalNumber * 2;
    if (finalNumber < secondnumber){
        i--;
    }
    console.log(finalNumber);
}
