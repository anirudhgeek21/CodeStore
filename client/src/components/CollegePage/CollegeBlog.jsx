import React, { Fragment, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navigation from '../Navigation';
import Featured from '../featured/FeaturedSection'

export default function CollegeHome() {
    const { category } = useParams();
    const trendingName = category ? `Trending in ${category}` : "Trending in General";
    const [blogs, setBlogs] = useState([]);
    let url;
    if (category==="") {
        url = 'https://code-store-backend.vercel.app/blogs';
    } else {
        url = `https://code-store-backend.vercel.app/blogs?category=${category}`;
    }

    useEffect(() => {
        const getBlogs = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    console.log(response);
                    throw new Error('Failed to fetch data');
                }
                const jsonData = await response.json();
                setBlogs(jsonData.data);
                console.log(jsonData);
            } catch (error) {
                console.error('Error fetching data:', error.message);
            }
        };
        getBlogs();
    }, [category, url]); 
    
    return (
        <Fragment>
            <Navigation x="X" college={category || 'General'} />
            <div className='mt-[-3%] w-[90%] mx-auto'>
                <Featured name={trendingName} />
            </div>

            <div className="w-[90%] mx-auto md:mt-0 mt-16 mb-12">

                <div className="text-5xl font-bold pt-0 pb-3 text-center bg-black text-sky-500 mt-5">
                    <h1>Discover the madness in {category || 'General'}</h1>
                </div>
                <div className="bg-black grid grid-cols-1 md:grid-cols-3 gap-0 text-white md:mt-3">
                    {blogs.map(blog => (
                        <div key={blog._id} className="hover:bg-blue-600 bg-black border-blue-600 border-[0.011px] px-12 py-10 hover:rounded-xl m-7 flex flex-col justify-center rounded-lg" style={{ backdropFilter: 'blur(20px)' }}>
                            <Link to={`/blogs/${blog._id}`} style={{ textDecoration: 'none' }}>
                                <div className="title font-extrabold text-3xl text-white mb-4">
                                    <h1>{blog.title}</h1>
                                </div>
                                <div className="description font-normal my-5 text-[#CDF5FD] text-md">
                                    <p>" {blog.description_short} "</p>
                                </div>
                                {/* <div className="file text-[#CDF5FD]">
                                <p>Code Link :- {blog.file}</p>
                            </div>
                            */}
                                <div className="tags text-[#CDF5FD] mt-5 w-[100%] mx-auto rounded-md py-2 text-md">
                                    <p><span className="font-bold">Tags : </span><span className="font-extralight ml-1"> {blog.tags}</span> </p>
                                </div>
                            </Link>

                        </div>
                    ))}
                </div>

            </div>
        </Fragment>
    )
}
