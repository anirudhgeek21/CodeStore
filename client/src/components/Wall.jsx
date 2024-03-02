import React, { Fragment, useEffect, useState } from "react";
import Featured from './featured/FeaturedSection';
import { Link } from 'react-router-dom';
import Categories from './Category';
import Navigation from './Navigation';

export default function Wall() {
    const [blogs, setBlogs] = useState([]);
    const [selectedBlog, setSelectedBlog] = useState(null); 

    useEffect(() => {
        const getBlogs = async () => {
            try {
                const response = await fetch("https://code-store-backend.vercel.app/blogs");
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const jsonData = await response.json();
                
                setBlogs(jsonData.data);
            } catch (error) {
                console.error('Error fetching data:', error.message);
            }
        };
        getBlogs();
    }, []);

    const handleDeleteBlog = async (id) => {
        try {
            const response = await fetch(`https://code-store-backend.vercel.app/blogs/${id}`, {
                method: 'DELETE'
            });
            if (!response.ok) {
                throw new Error('Failed to delete blog');
            }
            setBlogs(blogs.filter(blog => blog._id !== id));
        } catch (error) {
            console.error('Error deleting blog:', error.message);
        }
    };

    const handleDropdownClick = (blogId) => {
        setSelectedBlog(blogId === selectedBlog ? null : blogId);
    };

    return (
        <Fragment>
            <Navigation />
            <div className="w-[90%] mx-auto md:mt-0 mt-16 mb-12">
                <div className="mt-[-3.5%]">
                    <Featured name="Featured Blogs"/>
                </div>
                <div className="mt-[-2%]">
                    <Categories />
                </div>
                
                <div className="text-5xl font-bold pt-11 pb-3 text-center bg-black text-sky-500 mt-5">
                    <h1>Discover the madness</h1>
                </div>
                <div className="bg-black grid grid-cols-1 md:grid-cols-3 gap-0 text-white mt-3">
                    {blogs.toReversed().map(blog => (
                        <div key={blog._id} className="hover:bg-blue-600 bg-black border-blue-600 border-[0.011px] px-12 py-10 hover:rounded-xl m-5 flex flex-col justify-center rounded-lg" style={{ backdropFilter: 'blur(20px)' }}>
                            <div className="flex flex-row justify-between items-center">
                                <div className="text-left pb-4 pt-2 font-thin text-[#CDF5FD]">
                                    <span>{new Date(blog.createdAt).toLocaleString()}</span> 
                                </div>
                                <div className="relative">
                                    <button onClick={() => handleDropdownClick(blog._id)} className="focus:outline-none">
                                        <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                        </svg>
                                    </button>
                                    {selectedBlog === blog._id && (
                                        <div className="absolute right-0 bg-white  rounded-lg shadow-lg hover:bg-red-300">
                                            <button onClick={() => handleDeleteBlog(blog._id)} className="block px-4 py-2 text-sm rounded-lg text-gray-700 hover:font-bold duration-200 hover:bg-red-500 hover:text-white w-full text-left">Delete</button>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <Link to={`/blogs/${blog._id}`} style={{ textDecoration: 'none' }}>
                                <div className="title font-extrabold text-3xl text-white mb-4">
                                    <h1>{blog.title}</h1>
                                </div>
                                <div className="description font-normal my-5 text-[#CDF5FD] text-md">
                                    <p>" {blog.description_short} "</p>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </Fragment>
    );
}
