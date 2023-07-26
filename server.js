const express = require("express");
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json()); 

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.post("/generate-cover-letter", async (req, res) => {
  try {
    console.log(JSON.stringify(req.body));



    res.status(200).send("Data received and logged.");
  } catch (err) {
    console.error(err);
    res.status(500).send("An error occurred while receiving the data.");
  }
});




app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
