import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BlogPage = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);
    const [commentContent, setCommentContent] = useState("");
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const response = await fetch(`http://localhost:5555/blogs/${id}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const blogData = await response.json();
                setBlog(blogData);
                fetchComments();
            } catch (error) {
                console.error('Error fetching blog:', error.message);
            }
        };

        fetchBlog();
    }, [id]);

    const fetchComments = async () => {
        try {
            const response = await fetch(`http://localhost:5555/blogs/${id}/comments`);
            if (!response.ok) {
                throw new Error('Failed to fetch comments');
            }
            const commentsData = await response.json();
            setComments(commentsData);
        } catch (error) {
            console.error('Error fetching comments:', error.message);
        }
    };

    const handleCommentSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:5555/blogs/${id}/comments`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ content: commentContent })
            });
            if (!response.ok) {
                throw new Error('Failed to add comment');
            }
            setCommentContent("");
            fetchComments();
        } catch (error) {
            console.error('Error adding comment:', error.message);
        }
    };

    if (!id) {
        return <p>No blog ID provided</p>;
    }

    return (
        <div>
            {blog ? (
                <div className="text-white w-[75%] mx-auto">
                    <h1 className="text-8xl font-extrabold mb-14 mt-20">{blog.title}</h1>
                    <h2 className="text-4xl font-extralight mb-14 text-sky-500">~ {blog.description_short}</h2>
                    <div className="border-b border-gray-300"></div>
                    <div className="my-3 text-slate-500 hover:text-slate-300 duration-150 text-xl">Clap reactions</div>
                    
                    <div className="border-b border-gray-300 "></div>
                    <div className="text-2xl mt-14 bg-black text-white" dangerouslySetInnerHTML={{ __html: blog.description_long }} />
                    <div className="text-2xl font-thin my-4 mt-8">Link to file : <span className="text-blue-400 font-thin ml-3">{blog.file}</span></div>
                    <div className="text-2xl font-thin">Tags : <span className="text-sky-500 font-thin ml-3">{blog.tags}</span></div>



                    <div className="text-5xl font-bold text-center mt-20">
                        Comments
                    </div>
                    <div className="box mt-6 md:w-[50%] w-[100%] mx-auto py-5 border-[0.5px] border-blue-500 mb-8 rounded-md">
                        <form onSubmit={handleCommentSubmit}>
                            <div className="mb-2 md:w-[90%] w-[90%] mx-auto">
                                <textarea
                                    id="description"
                                    placeholder="Comment"
                                    className="w-full border rounded-md p-2 focus:outline-none bg-black border-blue-500 text-white text-center"
                                    rows="2"
                                    value={commentContent}
                                    onChange={(e) => setCommentContent(e.target.value)}
                                ></textarea>
                            </div>
                            <div className="text-center">
                                <button type="submit" className="hover:bg-blue-700 bg-blue-600 text-white py-1 px-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-md font-light">Post It</button>
                            </div>
                        </form>
                    </div>

                    

                    <div className="grid grid-cols-1 md:grid-cols-1 gap-5 bg-black mt-12 md:w-full w-[95%] mx-auto mb-24">
                        {comments.toReversed().map((comment) => (
                            <div key={comment._id} className="flex mt-0 p-6 py-3 rounded-md  bg-black ">
                                <div className="flex-row md:flex-col w-[100%] justify-around mx-auto my-auto">
                                    <div className="text-center text-[#CDF5FD] font-bold text-xl">
                                        "{comment.content}"
                                    </div>
                                    <div className="text-center pt-3 font-thin text-[#CDF5FD]">
                                        Commented at: <span className="text-[#CDF5FD]">{new Date(comment.createdAt).toLocaleString()}</span> 
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
