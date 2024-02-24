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

CommentSchema.add({ replies: [CommentSchema] });

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
        comments: [CommentSchema]
    },
    {
        timestamps : true,
    }
);

export const Discuss = mongoose.model('Discuss',DiscussSchema);