const express = require("express");
const router = express.Router();
const Post = require("../models/Post");


// returns all posts
router.get("/", async (req, res) => {
    try{
        const posts = await Post.find();
        res.json(posts)
    }catch(err){
        res.json({message : err});
    }
});

// Submits a post 
router.post("/",async (req, res)=>{
    const post = new Post({
        title: req.body.title,
        desc : req.body.desc
    })
    try{
        const savedPost = await post.save();
        res.json(savedPost);
    }catch(error){
        res.json({message: error});
    }
    
});

//Specific Post
router.get('/:id/:login', async (req, res) => {
    
    try {
        const post = await Post.findById(req.params.id);
        res.json(post);
    }catch(err){
        res.json({message : err});
    }
});

// delete by ID
router.delete('/postID', async (req,res) => {
    try{
        const removedPost = await Post.remove({_id: req.params.psotID});
        res.json(removedPost);
    }catch(err){
        res.json({message : err});
    }
});

router.patch("/postID", async (req, res) =>{
    try{
        const updatedPost = await Post.updateOne(
        { _id:  req.params.postID},
        {$set :{ title : req.body.title} }
        );
        res.json(updatedPost);
    }catch(err){
        res.json(err);
    }
})
module.exports = router;