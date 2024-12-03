
const express = require("express");
const app = express();
const PORT = 3000;

// Middleware per gestire il body JSON
app.use(express.json());

// Importa il router da posts.js
const postsRouter = require("./router/posts.js");
const posts = require("./dati/array.js");

// immagini statiche
app.use(express.static("public"));

// Usa il router per gestire le rotte /posts
app.use("/posts", postsRouter);

// Rotta principale
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/router/posts.js");
    res.send("<h1>Server del mio blog</h1>");
});

// stampa tutti gli oggetti di posts con una nuova rotta
app.get("/bacheca", (req, res) => {
    const result = {
        conteggio: posts.length, 
        posts: posts             
    };
    res.json(result); 
});

// trova un oggetto tramite l'id
app.get("/posts/:id", (req, res) => {
    const postId = parseInt(req.params.id); 
    const post = posts.find(p => p.id === postId); 
    if (post) {
      res.json(post); 
    } else {
      res.status(404).json({ message: "Post non trovato" }); 
    }
  });


// In ascolto sulla porta 3000
app.listen(PORT, () => {
    console.log(`Server in esecuzione su http://localhost:${PORT}`);
});