import validator from "validator";

export default class Contacto {
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
    const nameInput = el.querySelector('input[name="nome"]');
    const error = false;

    console.log(nameInput.value, " - ", emailInput.value);

    if (!nameInput.value) {
      this.showError(nameInput, "nome é obrigatório");
      console.log("passei");
      error = true;
    } else {
      this.showSuccess(nameInput, "");
    }
    if (!validator.isEmail(emailInput.value)) {
      this.showError(emailInput, "Email inválido");
      error = true;
    } else {
      this.showSuccess(nameInput, "");
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
