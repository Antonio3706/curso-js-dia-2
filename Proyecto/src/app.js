import usuariosRouter
from "../routes/usuarios.routes.js";
app.use("/usuarios", usuariosRouter);

app.set("view engine", "ejs");