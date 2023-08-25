import express from "express";
import dotenv from "dotenv";
import roteadorUsuario from "./routes/usuario.js";
dotenv.config();

const app = express();
const port = 3000;

app.use(express.json());
app.use(roteadorUsuario);

app.get("/", (req, res) => {
  console.log("Rota / solicitada");
  res.json({
    nome: "Robert Hucy Nunes Alves",
  });
});

app.listen(port, () => {
  console.log(`Serviço escutando na porta: ${port}`);
});
