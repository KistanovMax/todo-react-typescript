const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.URI_CLOUD_BD, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(console.log("MongoDB connected"))
  .catch((err) => console.log(err));

const todosRoutes = require("./routes/todos");

app.use("/todos", todosRoutes);

app.listen(process.env.PORT, () => console.log(`Server is running on port: ${process.env.PORT}`));
