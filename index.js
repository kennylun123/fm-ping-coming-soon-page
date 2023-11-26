const btnSubmit = document.querySelector("#btnSubmit");
const emailInput = document.querySelector("#email");

emailInput.addEventListener("blur", () => {
  validateEmail(emailInput.value);
});

btnSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  if (validateEmail(emailInput.value)) {
    alert("Subscribed");
    emailInput.value = "";
  }
});

const validateEmail = (input) => {
  // Basic email validation using a regular expression
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  // Check if the input is email pattern by using regex.
  const isValid = emailRegex.test(input);

  const errorMessage = document.getElementById("error-message");

  // Update the input style based on validation
  if (!isValid) {
    errorMessage.innerText = input
      ? "Please provide a valid email address"
      : "Whoops! It looks like you forgot to add your email";
    emailInput.style.border = "1px solid hsl(354, 100%, 66%)";
    errorMessage.classList.remove("hidden");
  } else {
    emailInput.style.border = "1px solid hsl(223, 100%, 88%)";
    errorMessage.classList.add("hidden");
  }

  return isValid;
};
