import mongoose from 'mongoose';

// const CommentSchema = mongoose.Schema({
//     content: {
//         type: String,
//         required: true
//     },
//     createdAt: {
//         type: Date,
//         default: Date.now
//     },
//     replies: [this]
// });

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

    

const DiscussSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        category: {
            type: String,
            required: false,
            default: "general",
        },
        upvote:{
            type: Number,
            required: false,
        },
        comments: [CommentSchema]
        
    },
    {
        timestamps : true,
    }
);

export const Discuss = mongoose.model('Discuss',DiscussSchema);