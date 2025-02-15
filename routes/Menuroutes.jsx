const express = require("express");
const router = express.Router();
import Menuitem from "../model/Menuitem";

router.post('/',async(req,res)=>{
    try{
        const {name,description,price}=req.body;
        if(!name || price==null){
            return res.status(400).json({error : "Name and Price are required"});
        }
        const newItem = new MenuItem({ name, description, price });
        await newItem.save();
        res.status(201).json({ message: "Menu item added!", item: newItem });
    }
    catch(error){
        res.status(500).json({error:"Server error"});
    }
})
router.get("/",async(req,res)=>{
    try{
        const items = await Menuitem.find();
        res.json(items);
    }
    catch(error){
        res.status(500).json({error: "Server error"});
    }
})

module.exports = router;