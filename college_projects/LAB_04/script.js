document.addEventListener("DOMContentLoaded", function() {
    const appleQuantity = document.getElementById("appleQuantity");
    const orangeQuantity = document.getElementById("orangeQuantity");
    const bananaQuantity = document.getElementById("bananaQuantity");
    const submitButton = document.getElementById("submit");

    let totalCost = 0;

    // Add event listeners for input fields
    appleQuantity.addEventListener("input", function() {
        updateTotalCost();
        updateSubmitButtonState();
    });
    orangeQuantity.addEventListener("input", function() {
        updateTotalCost();
        updateSubmitButtonState();
    });
    bananaQuantity.addEventListener("input", function() {
        updateTotalCost();
        updateSubmitButtonState();
    });

    // Add event listener for the "Submit" button
    submitButton.addEventListener("click", function() {
        if (totalCost > 0) {
            const salesTax = 0.05;
            const totalWithTax = totalCost * (1 + salesTax);
            alert(`Your total cost is $${totalWithTax.toFixed(2)}`);
        } else {
            alert("Please select at least one fruit and enter its quantity.");
        }
        // Prevent form submission
        event.preventDefault();
    });

    // Function to update the total cost
    function updateTotalCost() {
        totalCost = 0;
        if (appleQuantity.value !== "") {
            totalCost += parseFloat(appleQuantity.value) * 0.59;
        }
        if (orangeQuantity.value !== "") {
            totalCost += parseFloat(orangeQuantity.value) * 0.49;
        }
        if (bananaQuantity.value !== "") {
            totalCost += parseFloat(bananaQuantity.value) * 0.39;
        }
    }

    // Function to update the state of the "Submit" button
    function updateSubmitButtonState() {
        if (totalCost > 0) {
            submitButton.removeAttribute("disabled");
        } else {
            submitButton.setAttribute("disabled", "true");
        }
    }
});
