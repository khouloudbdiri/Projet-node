const mongoose = require("mongoose")
const Scategorie =require("./categorie.js");
const articleSchema = mongoose.Schema({
    designation: { type: String, required: true, unique: true },
    prix: { type: Number, required: false },
    qtestock: { type: Number, required: false },
    imageart: { type: String, required: false },
    scategorieID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Scategorie    }
})
module.exports = mongoose.model('produit', articleSchema)
