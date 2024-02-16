import express from "express";
import { PORT, mongoDBURL } from './config.js';
import mongoose from 'mongoose';
import { Blog } from './models/BlogModel.js';
import { Discuss } from './models/DiscussModel.js';

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    return res.status(234).send("hello");
});

// new discussion add
app.post('/discussions', async (req, res) => {
    try {
        if (
            !req.body.title ||
            !req.body.description 
        ) {
            return res.status(400).send({
                message: 'Send all required fields: title, description'
            });
        }

        const newDiscuss = {
            title: req.body.title,
            description: req.body.description,
            
        }

        const discussion = await Discuss.create(newDiscuss);
        return res.status(201).send(discussion);

    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

//new blog add
app.post('/blogs', async (req, res) => {
    try {
        if (
            !req.body.title ||
            !req.body.description ||
            !req.body.file ||
            !req.body.tags
        ) {
            return res.status(400).send({
                message: 'Send all required fields: title, description, file, tags'
            });
        }

        const newBlog = {
            title: req.body.title,
            description: req.body.description,
            file: req.body.file,
            tags: req.body.tags,
        }

        const blog = await Blog.create(newBlog);
        return res.status(201).send(blog);

    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});




//bols view all
app.get('/blogs', async(req,res) => {
    try {
        
        const blogs = await Blog.find({});
        return res.status(200).json({
            count : blogs.length ,
            data : blogs
        });
    } catch (error) {
        console.log(error.message);
        req.status(500)({ message: error.message });
    }
})

//discussion view all
app.get('/discussions', async(req,res) => {
    try {
        
        const discussion = await Discuss.find({});
        return res.status(200).json({
            count : discussion.length ,
            data : discussion
        });
    } catch (error) {
        console.log(error.message);
        req.status(500)({ message: error.message });
    }
})


//specific blog
app.get('/blogs/:id', async(req,res) => {
    try {
        const { id } = req.params;

        const blog = await Blog.findById(id);
        return res.status(200).json(blog);
        
    } catch (error) {
        console.log(error.message);
        req.status(500)({ message: error.message });
    }
})


//delete blog
app.delete('/blogs/:id', async(req,res) => {
    try {

        const {id} = req.params;

        const result = await Blog.findByIdAndDelete(id);

        if(!result){
            return res.status(404).json({message: 'Blog not Found'})
        }
        
        return res.status(200).send({message: 'Blog deleted Successfully'})

    } catch (error) {
        console.log(error.message);
        req.status(500)({message: error.message});
    }
})



//delete discussion
app.delete('/discussions/:id', async(req,res) => {
    try {

        const {id} = req.params;

        const delDiscuss = await Discuss.findByIdAndDelete(id);

        if(!delDiscuss){
            return res.status(404).json({message: 'Discussion not Found'})
        }
        
        return res.status(200).send({message: 'Discussion deleted Successfully'})

    } catch (error) {
        console.log(error.message);
        req.status(500)({message: error.message});
    }
})

mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log("App connected to db");
        app.listen(PORT, () => (
            console.log(`App is running on port ${PORT}`)
        ));
    })
    .catch((error) => {
        console.log(error)
    });
