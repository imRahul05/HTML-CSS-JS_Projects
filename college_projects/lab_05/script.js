function Vowel() {
    const inputString = document.getElementById("inputString").value;
    const vowels = "aeiouAEIOU";
    for (let i = 0; i < inputString.length; i++) {
      if (vowels.includes(inputString[i])) {
        const vowelPosition = i + 1;
        displayStringResult(`Input String: "${inputString}"`, `Left-Most Vowel Position: ${vowelPosition}`);
        return;
      }
    }
    displayStringResult(`Input String: "${inputString}"`, "No vowels found");
  }
  
  // Function to reverse the digits of a number
  function reverse() {
    const inputNumber = parseInt(document.getElementById("inputNumber").value, 10);
    if (!isNaN(inputNumber)) {
      const numberAsString = inputNumber.toString();
      const reversedNumberAsString = numberAsString.split('').reverse().join('');
      const reversedNumber = parseInt(reversedNumberAsString, 10);
      displayNumberResult(`Input Number: ${inputNumber}`, `Reversed Number: ${reversedNumber}`);
    } else {
      displayNumberResult("Invalid Input", "");
    }
  }
  
  // Function to reset input fields and output
  function resetInputOutput(inputId) {
    document.getElementById(inputId).value = "";
    document.getElementById("outputString").style.display = "none";
    document.getElementById("outputNumber").style.display = "none";
  }
  
  // Function to display string results using alert
  function displayStringResult(result1, result2) {
    alert(result1 + "\n" + result2);
  }
  
  // Function to display number results using alert
  function displayNumberResult(result1, result2) {
    alert(result1 + "\n" + result2);
  }
  