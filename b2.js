let numberArray = [1, 2, 3, 4, 5];

let userInput = parseInt(prompt("Nhập vào một số: "));

if (numberArray.includes(userInput)) {
    console.log("Bingo");
} else {
    console.log("Chúc bạn may mắn lần sau");
}