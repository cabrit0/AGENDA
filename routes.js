const express = require("express");
const route = express.Router();

const homeController = require("./src/controllers/homeController");
const loginController = require("./src/controllers/loginController");
const contactController = require("./src/controllers/contactController");

const { loginRequired } = require("./src/middlewares/middleware");

// Rotas da home
route.get("/", homeController.index);

//rotas de login
route.get("/login/index", loginController.index);
route.post("/login/register", loginController.register);
route.post("/login/login", loginController.login);
route.get("/login/logout", loginController.logout);

//rotas de contacto
route.get("/contacto/index", loginRequired, contactController.index);
route.post("/contacto/register", loginRequired, contactController.register);
route.get("/contacto/index/:id", loginRequired, contactController.editIndex);
route.post("/contacto/edit/:id", loginRequired, contactController.edit);
route.get("/contacto/delete/:id", loginRequired, contactController.delete);

module.exports = route;
