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

    const discussion = [
        {
            id: 1,
            title: "Discussion Topic 1",
            description: "This is the description for discussion topic 1."
        },
        {
            id: 2,
            title: "Discussion Topic 2",
            description: "This is the description for discussion topic 2."
        },
        {
            id: 3,
            title: "Discussion Topic 3",
            description: "This is the description for discussion topic 3."
        },
        // Add more dummy data as needed
    ];

    return (
        <div>
            {blog ? (
                <div className="text-white w-[70%] mx-auto">
                    <h1 className="text-4xl font-extrabold my-6 mt-16">{blog.title}</h1>
                    <h2 className="text-2xl font-extralight mb-11 text-sky-500">{blog.description_short}</h2>
                    {/* <div className="border-b border-gray-300"></div> */}
                    {/* <div className="my-2 text-slate-500">Add a Comment</div> */}
                    <div className="box w-[50%] mx-auto py-5 border-[0.5px] border-blue-500 mb-8 rounded-md">
                        <form action="">
                            <div className="mb-2 md:w-[90%] w-full mx-auto">
                                
                                <textarea id="description" placeholder="Comment" className="w-full border rounded-md p-2 focus:outline-none bg-black border-blue-500 text-white text-center" rows="2"
                                ></textarea>
                            </div>
                            <div className="text-center">
                                <button type="submit" className="hover:bg-blue-700 bg-blue-600 text-white py-1 px-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-md font-light">Post It</button>
                            </div>
                        </form>
                    </div>
                    {/* <div className="border-b border-gray-300 "></div> */}
                    {/* <p className="text-xl mt-10">{blog.description_long}</p>
                    <div className="text-2xl font-thin my-4 mt-8">Link to file : <span className="text-blue-400">{blog.file}</span></div>
                    <div className="text-2xl font-thin">Tags : <span className="text-sky-500">{blog.tags}</span></div> */}

                    <div className="mt-14">
                        <div className="absolute top-[63.4%] font-extralight text-2xl bg-black left-[43%] px-8">All Comments</div>
                        <div className="border-b border-gray-300 "></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-1 bg-black mt-6 md:w-full w-[90%] mx-auto mb-24">


                        {discussion.map((card)=>(
                            <div key={card.id} className="flex mt-4 p-6 rounded-md hover:bg-blue-600 bg-black border-[1px] border-blue-600">
                                
                                <div className="flex w-[90%] justify-around mx-auto">
                                    <div className="text-center text-[#CDF5FD] font-light text-md">
                                        " {card.description} "
                                    </div>
                                    <div >
                                        comment <span className="text-xs">(will open similar window and on tis screen will be comment count)</span>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default BlogPage;
