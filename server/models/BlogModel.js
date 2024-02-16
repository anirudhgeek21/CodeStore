import mongoose from 'mongoose';

const BlogSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        file: {
            type: String,
            required: true,
        },
        tags: {
            type: String,
            required: true,
        }
    },
    {
        timestamps : true,
    }
);

export const Blog = mongoose.model('Blog',BlogSchema);