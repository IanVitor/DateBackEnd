const express = require('express');
const cors = require("cors");
const app = express();
const config = require("./config.json");


app.use(cors());

app.use(express.json());

// DB Connection
const conn = require("./db/conn");

conn();

// Routes
const routes = require("./routes/router")

app.use("/api", routes);

app.listen(config.port , () => {
  console.log(`Servidor rodando na porta: ${config.port}`)
});