const express = require('express');
const router = express.Router();
const prod = require("../models/produit")
// afficher la liste des articles.
router.get('/', async (req, res,) => {
    try {
        const articles = await
            prod.find().populate("scategorieID").exec();
        res.status(200).json(articles);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});
// créer un nouvel article
router.post('/', async (req, res) => {
    const nouvarticle = new prod(req.body)
    try {
        await nouvarticle.save();
        res.status(200).json(nouvarticle);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});
// chercher un article
router.get('/:articleId', async (req, res) => {
    try {
        const art = await prod.findById(req.params.articleId);
        res.status(200).json(art);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});
// modifier un article
router.put('/:articleId', async (req, res) => {
    //const { 
    //     designation, prix, qtestock, imageart, scategorieID } = req.body;
    // const id = req.params.articleId;
    try {
        // const art1 = {
        //     designation: designation, prix: prix, qtestock: qtestock, imageart: imageart, scategorieID: scategorieID, _id: id
        // };
        // await prod.findByIdAndUpdate(id, art1);
        res.json(req);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});
// Supprimer un article
router.delete('/:articleId', async (req, res) => {
    const id = req.params.articleId;
    await prod.findByIdAndDelete(id);
    res.json({ message: "Product deleted successfully." });
});
module.exports = router;