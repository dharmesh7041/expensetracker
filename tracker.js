const expenseForm = document.getElementById("expenseForm");
const expenseList = document.getElementById("expenseList");

expenseForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevents the default form submission behavior

    // Get values from form inputs
    const description = document.getElementById("description").value;
    const category = document.getElementById("category").value;
    const amount = document.getElementById("amount").value;

    // Validate the form inputs
    if (description && category && !isNaN(amount)) {
        // Create a new row for the expense list
        const newRow = document.createElement("tr");

        // Populate the new row with data
        newRow.innerHTML = `<td>${description}</td>
                            <td>${category}</td>
                            <td>${amount}</td>`;

        // Append the new row to the expense list table
        expenseList.appendChild(newRow);
    } else {
        // If any field is empty or amount is not a number, show an alert
        alert("Please fill out all fields with valid data.");
    }

    // Clear the form inputs after submission
    document.getElementById("description").value = '';
    document.getElementById("category").value = '';
    document.getElementById("amount").value = '';
});
