const express = require('express');
const router = express.Router();
const Scategorie=require("../models/scategorie");


// afficher la liste des scategories.
router.get('/', async (req, res)=> {
    try {
        const scat=await Scategorie.find()
        return res.status(200).json(scat)
        
    } catch (error) {
        res.status(404).json({message:error.message});
    }


});

// chercher une sous catégorie
router.get('/:scategorieId', async (req, res)=> {
    try { 
        const scat=await Scategorie.findById(req.params.scategorieId)
        res.status(200).json(scat);
        
    } catch (error) {
        res.status(404).json({message:error.message});        
    }

});

// créer un nouvelle scatégorie
router.post('/',async(req,res)=>{
    
    const newscategorie =new Scategorie(req.body)
    try {
        await newscategorie.save()
        res.status(200).json(newscategorie);
        
    } catch (error) {
        res.status(404).json({ message: error.message });
    }

});

// supprimer une scatégorie
router.delete('/:scategorieId',async(req,res)=>{
    try {
        await Scategorie.findByIdAndDelete(req.params.scategorieId);
        res.status(200).json({ message: "sous categorie deleted successfully." });
    } catch (error) {
        res.status(404).json({ message: error.message }); 
    }

});

// modifier une catégorie
router.put('/:scategorieId',async(req,res)=>{
    try {
            const scat1 = await Categorie.findByIdAndUpdate(
    req.params.categorieId,
    { $set: req.body },
    { new: true }
    );
    res.status(200).json(cat1);
        
    } catch (error) {
        res.status(404).json({ message: error.message });
    }

});

module.exports = router;