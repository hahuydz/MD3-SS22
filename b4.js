let userInput = prompt("Nhập vào dãy số: ");
let numberArray = userInput.split(",").map(Number);
let maxNumber = numberArray[0];

if(isNaN(userInput)){
    console.log("Dãy ko hợp lệ")
}

for (let i = 1; i < numberArray.length; i++) {
    if (numberArray[i] > maxNumber) {
        maxNumber = numberArray[i];
    }
}

console.log("Giá trị lớn nhất trong mảng là:", maxNumber);