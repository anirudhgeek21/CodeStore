import React, { Fragment, useEffect, useState } from "react";
import Featured from './featured/FeaturedSection';

export default function Wall() {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const getBlogs = async () => {
            try {
                const response = await fetch("http://localhost:5555/blogs");
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const jsonData = await response.json();
                console.log(jsonData);
                setBlogs(jsonData.data);
            } catch (error) {
                console.error('Error fetching data:', error.message);
            }
        };
        getBlogs();
    }, []);

   

    return (
        <Fragment>
            <div className="w-[90%] mx-auto md:mt-0 mt-10 mb-12">
                <div>
                    <Featured />
                </div>
                <div className="border-b border-gray-300 hidden md:block md:mt-24"></div>
                <div className="text-5xl font-extralight pt-10 pb-6 text-center bg-black text-sky-500">
                    <h1>Discover the madness</h1>
                </div>
                <div className="bg-black grid grid-cols-1 md:grid-cols-3 gap-3 text-white">
                    {blogs.map(blog => (
                        <div key={blog.id} className="hover:bg-blue-600 bg-black border-blue-600 border-[2px] px-14 py-10 m-7 flex flex-col justify-center rounded-lg" style={{ backdropFilter: 'blur(20px)' }}>
                            <div className="title font-bold text-3xl text-white">
                                <h1>{blog.title}</h1>
                            </div>
                            <div className="description font-light my-5 text-[#CDF5FD]">
                                <p>" {blog.description} "</p>
                            </div>
                            <div className="file text-[#CDF5FD]">
                                <p>Code Link :- {blog.file}</p>
                            </div>
                            <div className="tags text-[#CDF5FD] mt-5 w-[100%] mx-auto rounded-md py-2">
                                <p>Tags : {blog.tags}</p>
                            </div>
                            
                        </div>
                    ))}
                </div>
            </div>
        </Fragment>
    );
}
