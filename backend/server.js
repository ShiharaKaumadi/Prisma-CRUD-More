const express = require("express");
const app = express();

app.arguments(express.json());

app.listen(3000, () => console.log(`Server Running on PORT 3000`));