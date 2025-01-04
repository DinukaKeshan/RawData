const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
app.use(bodyParser.json());

mongoose
  .connect("mongodb+srv://Dinuka:Dinuka2001@cluster0.r1eez.mongodb.net/mern")
  .then(() => console.log("mongoose connected"))
  .catch(() => console.log("connection failed"));

const userSchema = mongoose.Schema({
  name: String,
  age: Number,
  email: String,
  city: String,
  profession: String,
});

const User = mongoose.model("users", userSchema);

app.get("/users", async (req, res) => {
  try {
    const members = await User.find();
    res.json(members);
  } catch (error) {
    res.json(error);
  }
});

app.listen(3000, () => {
  console.log("Server is running on : http://localhost:3000/");
});
