const containerEl = document.getElementById("container");
const userEmailEl = document.getElementById("user-email");
const invalidEmailEl = document.getElementById("invalid-email");
const emailInputEl = document.getElementById("email");
const submitBtnEl = document.getElementById("submit-btn");

const confirmedMessageEl = document.getElementById("confirmed-message");
const dismissMessageBtnEl = document.getElementById("dismiss-message");
const emailInput = document.getElementById('email');
const errorMsg = document.getElementById('invalid-email');

//display the success message and hide the container
function formSuccess() {
    confirmedMessageEl.classList.add("active");
    containerEl.classList.add("success");
}

//validate the email input
//using a simple regex pattern
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

//event listeners

submitBtnEl.addEventListener("click", (e) => {
    e.preventDefault(); //prevent the default form submission behavior
    const email = emailInputEl.value.trim(); //get the value of the email input and trim any whitespace

    if (validateEmail(email)) {
        formSuccess();//call the formSuccess function to display the success message
        userEmailEl.innerText = email;//set the inner text of the userEmailEl to the email in success message
        emailInputEl.value = ""; //reset the input field 
        error-message.classList.remove("active");//remove the invalid email message
        emailInputEl.classList.remove("active");//remove the red border from the input field
    } else {
        error-message.classList.add("active");//add the invalid email message
        error-message.classList.add("active");//add the red border to the input field
    }
} )

emailInput.addEventListener('input', () => {
  if (!emailInput.validity.valid) {
    emailInput.setAttribute('aria-describedby', 'invalid-email');
    emailInput.setAttribute('aria-invalid', 'true');
    errorMsg.style.display = 'block';
  } else {
    emailInput.removeAttribute('aria-describedby');
    emailInput.setAttribute('aria-invalid', 'false');
    errorMsg.style.display = 'none';
  }
});

//dismiss the success message and reset the container
dismissMessageBtnEl.addEventListener("click", () => {
    containerEl.classList.remove("success");//remove the success class from the container showing the container again
    confirmedMessageEl.classList.remove("active"); //remove the active class from the success message hiding it
})
  