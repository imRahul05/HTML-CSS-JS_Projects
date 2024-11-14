function findLeftMostVowel(str) {
 const vowels = "aeiouAEIOU";
 for (let i = 0; i < str.length; i++) {
 if (vowels.includes(str[i])) {
 return i + 1; // Adding 1 to get 1-based index
 }
 }
 return -1; // No vowels found
}
function reverseDigits(num) {
 const reversedNum = parseFloat(num.toString().split('').reverse().join(''));
 return reversedNum;
}
document.addEventListener("DOMContentLoaded", function() {
 const vowelButton = document.getElementById("vowelButton");
 const resetVowelButton = document.getElementById("resetVowelButton");
 const vowelPositionResult = document.getElementById("vowelPositionResult");
 const reverseButton = document.getElementById("reverseButton");
 const resetReverseButton = document.getElementById("resetReverseButton");
 const reversedNumberResult = document.getElementById("reversedNumberResult");
 vowelButton.addEventListener("click", function() {
 const inputString = document.getElementById("inputString").value;
 const leftMostVowelPosition = findLeftMostVowel(inputString);
 vowelPositionResult.textContent = leftMostVowelPosition !== -1 ? leftMostVowelPosition : "No
vowel found"; });
 resetVowelButton.addEventListener("click", function() {
 document.getElementById("inputString").value = "";
 vowelPositionResult.textContent = "";
 });
 reverseButton.addEventListener("click", function() {
 const inputNumber = parseFloat(document.getElementById("inputNumber").value);
 const reversedNumber = reverseDigits(inputNumber);
 reversedNumberResult.textContent = reversedNumber;
 });
 resetReverseButton.addEventListener("click", function() {
 document.getElementById("inputNumber").value = "";
 reversedNumberResult.textContent = "";
 });
})