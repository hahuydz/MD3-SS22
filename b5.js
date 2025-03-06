let userInput = prompt("Nhập vào dãy số:");
let sumOdd;
let sumEven;
let numberArray = userInput.split(",").map(Number);

if(isNaN(userInput)){
    console.log("Dãy ko hợp lệ")
}else if(numberArray % 2 === 0 ){
    numberArray += sumOdd;
}else{
    numberArray += sumEven;
}

console.log(`tổng các số chẵn là: ${sumOdd}`);
console.log(`tổng các số lẻ là: ${sumEven}`);