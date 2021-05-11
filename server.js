const express = require("express");
const cors = require("cors");

const app = express();
// app.use() // how we use middleware function

const corsOptions = {
    origin: 'https://localhost:3001'
}

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

