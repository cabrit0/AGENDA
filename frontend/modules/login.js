import validator from "validator";

export default class Login {
  constructor(formClass) {
    this.form = document.querySelector(formClass);
  }

  init() {
    this.events();
  }

  events() {
    if (!this.form) return;
    this.form.addEventListener("submit", (e) => {
      e.preventDefault();

      this.validate(e);
    });
  }

  validate(e) {
    const el = e.target;

    const emailInput = el.querySelector('input[name="email"]');
    const passwordlInput = el.querySelector('input[name="password"]');
    const error = false;

    //console.log(emailInput.value, passwordlInput.value);

    if (!validator.isEmail(emailInput.value)) {
      this.showError(emailInput, "Email inválido");
      error = true;
    } else {
      this.showSuccess(emailInput, "Email válido");
    }
    if (passwordlInput.value.length < 3 || passwordlInput > 50) {
      this.showError(passwordlInput, "senha inválida, entre 3 e 50 caracteres");
      error = true;
    } else {
      this.showSuccess(emailInput, "Password válida");
    }
    if (!error) el.submit();
  }

  showError(input, message) {
    const formField = input.parentElement;
    const error = formField.querySelector("small");
    formField.classList.remove("success");
    formField.classList.add("error");
    error.textContent = message;
  }

  showSuccess(input, message) {
    const formField = input.parentElement;
    const error = formField.querySelector("small");
    formField.classList.remove("error");
    formField.classList.add("success");
    error.textContent = message;
  }
}
