import "core-js/stable";
import "regenerator-runtime/runtime";

import "./assets/css/style.css";

import Login from "./modules/Login";
import Contacto from "./modules/contacto";

const login = new Login(".form-login");
const cadastro = new Login(".form-cadastro");
login.init();
cadastro.init();

const name = new Contacto(".form-contacto");
name.init();
