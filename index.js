const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Hello from Express on Render</h1>");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Running on port " + PORT);
});
