
const express = require("express");
const app = express();
const PORT = 3000;

// Importa il router da posts.js
const postsRouter = require("./routers/posts.js");

// immagini statiche 
app.use(express.static('public'));


// Usa il router per gestire le rotte /pets
app.use("/pets", postsRouter);  

// Rotta principale per servire index.html dalla cartella pages
app.get("/", (req, res) => {
  res.sendFile({ root: __dirname + "/pages" });
});

// In ascolto sulla porta 3000
app.listen(PORT, () => {
  console.log(`Server in esecuzione su http://localhost:${PORT}`);
});