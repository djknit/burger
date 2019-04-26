const express = require("express");
const dotenv = require("dotenv").config();

const PORT = process.env.PORT || 3000;

const app = express();

// (From Bootcamp week 14 activity 16)
// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const handlebars = require("express-handlebars");

// (From Bootcamp week 14 activity 4)
// Set Handlebars as the default templating engine.
app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const routes = require("./controllers/burgers_controller");

app.use(routes);

app.listen(PORT, () => console.log("Server listening on PORT " + PORT));