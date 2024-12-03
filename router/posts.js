
const express = require("express");
const router = express.Router();

// Create - Store
router.post("/", (req, res) => {
    res.send("Creazione nuova post");
});

// Update totale - Update
router.put("/:id", (req, res) => {
    res.send("Modifica integrale del post");
});

// Update parziale - Modify
router.patch("/:id", (req, res) => {
    res.send("Modifica parziale del post");
});

// Delete (cancellazione) - Destroy
router.delete("/:id", (req, res) => {
    res.send("Cancellazione del post");
});

module.exports = router;
