import express from "express";
import publicRoutes from "./routes/public.js";

const app = express();
app.use(express.json());

app.use("/", publicRoutes);

/* Criar 3 rotas
Publicas
        Cadastrar  rota Cadastro e Login 

Privadas
        Listar Usúarios
 */

app.listen(3000, () => console.log("Servidor Rodando 🚀"));



// mongodb+srv://vihcamargo:<db_password>@users.eqcoxmx.mongodb.net/?retryWrites=true&w=majority&appName=Users
