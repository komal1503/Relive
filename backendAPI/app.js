require("dotenv").config();
const express = require("express");
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
var cors = require('cors')


const port = process.env.PORT || 3000;

// Routers
const indexRouter = require("./routes/index");
const authRouter = require("./routes/auth");
const memoryRouter = require("./routes/memories");

const app = express();
app.use(express.json());

app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: false
}));

app.use(cors());

app.use(passport.initialize());
app.use(passport.session());

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true});
// mongoose.set('useFindAndModify', false);
// mongoose.set('useCreateIndex', true);

// Using Routes
app.use("/", indexRouter);
app.use("/auth", authRouter);
app.use("/memories", memoryRouter);

app.listen(port, () => {
  console.log(`Server is running at port ${port}...`);
});
