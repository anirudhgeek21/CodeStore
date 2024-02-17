import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BlogPage = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const response = await fetch(`http://localhost:5555/blogs/${id}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const blogData = await response.json();
                setBlog(blogData);
            } catch (error) {
                console.error('Error fetching blog:', error.message);
            }
        };

        fetchBlog();
    }, [id]);

    if (!id) {
        return <p>No blog ID provided</p>;
    }


    return (
        <div>
            {blog ? (
                <div className="text-white w-[70%] mx-auto">
                    <h1 className="text-4xl font-extrabold my-6 mt-16">{blog.title}</h1>
                    <h2 className="text-2xl font-extralight mb-8 text-sky-500">{blog.description_short}</h2>
                    <div className="border-b border-gray-300"></div>
                    <div className="my-2 text-slate-500">Comments</div>
                    <div className="border-b border-gray-300"></div>
                    <p className="text-xl mt-10">{blog.description_long}</p>
                    <div className="text-2xl font-thin my-4 mt-8">Link to file : <span className="text-blue-400">{blog.file}</span></div>
                    <div className="text-2xl font-thin">Tags : <span className="text-sky-500">{blog.tags}</span></div>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default BlogPage;
