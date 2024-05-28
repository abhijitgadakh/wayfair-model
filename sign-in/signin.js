document.addEventListener("DOMContentLoaded", () => {
  const emailContainer = document.querySelector(".email");
  const passwordContainer = document.querySelector(".password");
  const successContainer = document.querySelector(".success");
  const emailInput = emailContainer.querySelector("input[type='text']");
  const emailError = emailContainer.querySelector("p");
  const continueButton = emailContainer.querySelector(".btn-continue");
  const passwordInput = passwordContainer.querySelector(
    "input[type='password']"
  );
  const passwordError = passwordContainer.querySelector("p");
  const createAccountButton =
    passwordContainer.querySelector(".btn-create-acc");

  const isValidEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const handleEmailValidation = () => {
    console.log("Hello ewm");
    const emailValue = emailInput.value.trim();
    if (!isValidEmail(emailValue)) {
      emailError.classList.remove("hide");
    } else {
      emailError.classList.add("hide");
      emailContainer.classList.add("hide");
      passwordContainer.classList.remove("hide");
    }
  };

  const handleAccountCreation = () => {
    const passwordValue = passwordInput.value.trim();
    if (passwordValue.length < 6) {
      passwordError.classList.remove("hide");
    } else {
      passwordError.classList.add("hide");
      passwordContainer.classList.add("hide");
      successContainer.classList.remove("hide");
    }
  };

  continueButton.addEventListener("click", handleEmailValidation);
  createAccountButton.addEventListener("click", handleAccountCreation);
});

document.querySelector(".email").classList.remove("hide");
