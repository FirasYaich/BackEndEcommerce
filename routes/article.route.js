const express = require('express');
const router = express.Router();
const Article =require('../models/article');

router.get('/',async(req,res)=>{
    try {
        const art = await Article.find().populate("scategorieID")
        res.status(200).json(art)
    } catch (error) {
        res.status(404).json({ message: error.message });
    }

})

router.post('/',async(req,res)=>{
    const newarticle = new Article(req.body)
    try {
        await newarticle.save()
        res.status(200).json(newarticle);
        
    } catch (error) {
        res.status(404).json({ message: error.message });        
    }
    
})

router.put('/:id',async(req,res)=>{
    try {
        const art=await Article.findByIdAndUpdate(
            req.params.id,
            {$set:req.body},
            {new:true}
            );
            res.status(200).json(art);
        
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
    
})

router.get('/:id',async(req,res)=>{
    try {
        const art = await Article.findById(req.params.id).populate("scategorieID")
        res.status(200).json(art);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
    
})

router.delete('/:id',async(req,res)=>{
    try {
        await Article.findByIdAndDelete(req.params.id);
        res.status(200).json(art);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
    
})

module.exports = router;