import mongoose from 'mongoose';

const DiscussSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        }
    },
    {
        timestamps : true,
    }
);

export const Discuss = mongoose.model('Discuss',DiscussSchema);