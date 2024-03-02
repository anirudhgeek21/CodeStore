import mongoose from 'mongoose';

const CommentSchema = mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const BlogSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description_short: {
            type: String,
            required: true,
        },
        description_long: {
            type: String,
            required: true,
        },
        author: {
            type: String,
            required: false,
        },
        category: {
            type: String,
            required: false,
            default: "general",
        },
        file: {
            type: String,
            required: false,
        },
        tags: {
            type: String,
            required: false,
        },
        upvote:{
            type: Number,
            required: false,
        },
        createdAt: {
            type: Date,
            default: Date.now
        },
        comments: [CommentSchema]
    },
    {
        timestamps : true,
    }
);

export const Blog = mongoose.model('Blog',BlogSchema);