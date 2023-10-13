document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("myForm");
  const inputField = document.getElementById("inputField");
  const errorElement = document.getElementById("error");
  const confirmationElement = document.getElementById("confirmation");

  form.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent form submission

      const inputValue = inputField.value.trim();

      // Regular expression for alphanumeric input (letters and digits)
      const alphanumericRegex = /^[a-zA-Z0-9]+$/;

      if (inputValue === "") {
          errorElement.textContent = "Please enter a value.";
          confirmationElement.textContent = "";
      } else if (!alphanumericRegex.test(inputValue)) {
          errorElement.textContent = "Input must be alphanumeric (letters and digits only).";
          confirmationElement.textContent = "";
      } else {
          errorElement.textContent = "";
          confirmationElement.textContent = "Input is valid!";
          // You can choose to submit the form or perform other actions here if needed.
      }
  });
});

