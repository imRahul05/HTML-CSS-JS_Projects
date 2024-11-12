const form = document.querySelector("form");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  // Check if all fields are filled.
  const allFieldsFilled = true;
  for (let input of form.querySelectorAll("input, textarea")) {
    if (!input.value) {
      allFieldsFilled = false;
      break;
    }
  }

  // Display a message if not all fields are filled.
  if (!allFieldsFilled) {
    alert("Please fill in all required fields.");
    return;
  }

  // Submit the form if all fields are filled.
  form.submit();
});
const form = document.querySelector("form");
const successMessage = document.getElementById("success-message");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  // Check if all fields are filled.
  const allFieldsFilled = true;
  for (let input of form.querySelectorAll("input, textarea")) {
    if (!input.value) {
      allFieldsFilled = false;
      break;
    }
  }

  // Display a message if not all fields are filled.
  if (!allFieldsFilled) {
    alert("Please fill in all required fields.");
    return;
  }

  // Submit the form if all fields are filled.
  form.submit();

  // Display a success message after the form is submitted.
  successMessage.textContent = "Form submitted successfully!";
});
