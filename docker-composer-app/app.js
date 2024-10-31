const express = require("express");
const app = express();

app.use(express.json());

const port = 3000;

app.get("/api", (req, res) => {
    res.status(200).send(`Olá para Node.js API!`);
})

app.listen(port, () => {
    console.log(`Servidor executando na porta ${port}`);
})