const express = require("express");
const app = express();
const users = require("./db/user.json");

app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/assets"));
app.use(express.json());

let isLogin = false;

app.set("view engine", "ejs");

app.use((req, res, next) => {
    if (req.url === "/game" && !isLogin) {
        res.redirect("/login");
    }

    next();
});

app.get("/users", (req, res) => {
    res.json(users);
});

app.post("/user/", (req, res) => {
    const { nama, email, password } = req.body;

    const user = {
        nama,
        email,
        password
    };

    users.push(user);
    res.json(user);
});

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/game", (req, res) => {
    res.render("game");
});

app.get("/signup", (req, res) => {
    res.render("signup");
});

app.get("/login", (req, res) => {
    res.render("login", {
        error: "",
    });
});

app.post("/login/auth", (req, res) => {
    const user = require("./db/user.json");

    if (user.email === req.body.userEmail && user.password === req.body.userPassword) {
        isLogin = true;
        res.redirect("/game");
    } else {
        res.render("login", {
            error: "Incorrect email address or password",
        });
    }
});

app.listen(3000, () => {
    console.log("Server Running...");
});