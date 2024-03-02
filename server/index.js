import express from "express";
import cors from "cors";
import { PORT, mongoDBURL } from './config.js';
import mongoose from 'mongoose';
import { Blog } from './models/BlogModel.js';
import { Discuss } from './models/DiscussModel.js';

const app = express();

app.use(express.json());
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
  }));

app.get("/", (req, res) => {
    return res.status(234).send("CodeStore server sexyyy !!!");
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
            category: req.body.category,
            upvote: req.body.upvote,
            
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
            !req.body.description_short ||
            !req.body.description_long 
            // !req.body.author ||
            // !req.body.category ||
            // !req.body.file ||
            // !req.body.tags
        ) {
            return res.status(400).send({
                message: 'Send all required fields: title, description, file, tags'
            });
        }

        const newBlog = {
            title: req.body.title,
            description_short: req.body.description_short,
            description_long: req.body.description_long,
            author: req.body.author,
            category: req.body.category,
            file: req.body.file,
            tags: req.body.tags,
            upvote: req.body.upvote,
        }

        const blog = await Blog.create(newBlog);
        return res.status(201).send(blog);

    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});


// comment add blog
app.post('/blogs/:id/comments', async (req, res, next) => {
    try {
        
        const blog = await Blog.findById(req.params.id);
        if (!blog) {
            return res.status(404).json({ message: 'Blog not found' });
        }

        if (!req.body.content) {
            return res.status(400).json({ message: 'Content is required for comment' });
        }

        const newComment = {
            content: req.body.content,
            createdAt: new Date()
        };
        blog.comments.push(newComment);
        await blog.save();

        return res.status(201).json({ message: 'Comment added successfully', comment: newComment });
    } catch (error) {
        next(error); 
    }
});


// add comment to discussion
app.post('/discussions/:id/comments', async (req, res, next) => {
    try {
        
        const discussion = await Discuss.findById(req.params.id);
        if (!discussion) {
            return res.status(404).json({ message: 'Discussion not found' });
        }

        if (!req.body.content) {
            return res.status(400).json({ message: 'Content is required for comment' });
        }

        const newComment = {
            content: req.body.content,
            createdAt: new Date()
        };
        discussion.comments.push(newComment);
        await discussion.save();

        return res.status(201).json({ message: 'Comment added successfully', comment: newComment });
    } catch (error) {
        next(error); 
    }
});



//get comment diswcuss
app.get('/discussions/:id/comments', async (req, res) => {
    try {
        const { id } = req.params;
        const discussion = await Discuss.findById(id);
        if (!discussion) {
            return res.status(404).json({ message: 'Discussion not found' });
        }
        return res.status(200).json(discussion.comments);
    } catch (error) {
        console.error('Error fetching comments:', error.message);
        res.status(500).json({ message: 'Internal server error' });
    }
});




//get comment blog
app.get('/blogs/:id/comments', async (req, res) => {
    try {
        const { id } = req.params;
        const blog = await Blog.findById(id);
        if (!blog) {
            return res.status(404).json({ message: 'Blog not found' });
        }
        return res.status(200).json(blog.comments);
    } catch (error) {
        console.error('Error fetching comments:', error.message);
        res.status(500).json({ message: 'Internal server error' });
    }
});




//bols view all
app.get('/blogs', async(req,res) => {
    try {
        const { category } = req.query;
        const filter = {};
        if (category) {
            filter.category = category;
        }
        const blogs = await Blog.find(filter);
        return res.status(200).json({
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

        const { category } = req.query;
        const filter = {};
        if (category) {
            filter.category = category;
        }
        
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


//specific discussion
app.get('/discussions/:id', async(req,res) => {
    try {
        const { id } = req.params;

        const discussion = await Discuss.findById(id);
        return res.status(200).json(discussion);
        
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
