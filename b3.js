let userInput = prompt("Nhập vào dãy số: ");
if(isNaN(userInput)){
    console.log("Dãy ko hợp lệ")
}else{
    let numberArray = userInput.split(",").map(Number);
    numberArray.reverse();
    console.log("Mảng sau khi đảo ngược:", numberArray);
}