const sevenDigitNumber = (prompt("Type seven-digit number"));
const sevenNumberArray = sevenDigitNumber.split('');

let sum = 0;

for (let i = 0; i < sevenDigitNumber.length; i++){
    sum = sum + parseInt(sevenDigitNumber[i]);
}
console.log(sum);




