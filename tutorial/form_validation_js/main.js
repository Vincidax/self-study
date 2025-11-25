const $form = document.querySelector(".js-form");
const $nameInput = document.querySelector(".js-name-input");
const $emailInput = document.querySelector(".js-email-input");
const $passwordInput = document.querySelector(".js-password-input");

const hightlightError = ($input, errorMessage) => {
  $input.parentNode.classList.add("form__field--error");
  $input.nextElementSibling.innerText = errorMessage;
}

const validate = () => {
  const nameValue = $nameInput.value.trim()
  const emailValue = $nameInput.value.trim()
  const passwordValue = $passwordInput.value.trim()
  
  if(!nameValue) {
    hightlightError($nameInput, "Name can't be blank");
  }
}

$form.addEventListener('submit', (event) => {
  event.preventDefault();

  validate()
});