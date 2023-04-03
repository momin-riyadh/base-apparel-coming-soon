const submitBtnEl = document.querySelector(".form_btn");
const emailInputEl = document.querySelector(".email_input");
const errorImagEl = document.querySelector(".error_img");

let emailValue = "";

let submitMessage = "";
let messageClass = "";
let messageContainer = document.createElement("div");
const regex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const writeMessage = (mes, cl) => {
  messageContainer.innerHTML = `<p class="${cl}">${mes}</p>`;

  submitBtnEl.insertAdjacentElement("afterend", messageContainer);
};

const validEmail = () => {
  submitMessage = "Thanks for your interest!";
  messageClass = "valid_email";
  writeMessage(submitMessage, messageClass);
  emailInputEl.style.border = "1px solid hsla(0, 36%, 70%, 0.5)";
  errorImagEl.style.visibility = "hidden";
};

const invalidEmail = () => {
  submitMessage = "Please provide a valid email";
  messageClass = "invalid_email";
  writeMessage(submitMessage, messageClass);
  emailInputEl.style.border = "2px solid hsl(0, 93%, 68%)";
  errorImagEl.style.visibility = "visible";
};

submitBtnEl.addEventListener("click", (e) => {
  emailValue = emailInputEl.value;

  if (emailValue.match(regex)) {
    validEmail();
    submitBtnEl.disabled = true;
  } else {
    invalidEmail();
    e.preventDefault();
  }
});
