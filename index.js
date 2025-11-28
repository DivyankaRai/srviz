
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/api/contact", (req, res) => {
  const { name, email, phone, message } = req.body;
  if (!name || !email || !phone || !message) {
    return res.status(400).json({ message: "All fields are required" });
  }


  res.json({ message: "Form submitted successfully rtyui" });
});

app.listen(5000, () => console.log("Backend running on http://localhost:5000"));
