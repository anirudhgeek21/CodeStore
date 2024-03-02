import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navigation from "../Navigation";

const DiscussionPage = () => {
    const { id } = useParams();
    const [discussion, setDiscussion] = useState(null);
    const [commentContent, setCommentContent] = useState("");
    const [comments, setComments] = useState([]);
    const authors = ["Dr. Draco Horse","Rost Kelly","Michella Campbell","Dr. Rosemary Fangs","Casper Calix","Damien Nyx","Freddy Morton","Ani Edgar","Corvin Bellatrix","Anirudh Esther"];

    useEffect(() => {
        const fetchDiscussion = async () => {
            try {
                const response = await fetch(`https://code-store-backend.vercel.app/discussions/${id}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const discussionData = await response.json();
                setDiscussion(discussionData);
                fetchComments();
            } catch (error) {
                console.error('Error fetching discussion:', error.message);
            }
        };

        fetchDiscussion();
    }, [id]);

    const fetchComments = async () => {
        try {
            const response = await fetch(`https://code-store-backend.vercel.app/discussions/${id}/comments`);
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
            const response = await fetch(`https://code-store-backend.vercel.app/discussions/${id}/comments`, {
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
        return <p>No discussion ID provided</p>;
    }

    return (
        <div>
            <Navigation />
            {discussion ? (

                <div className="text-white md:w-[75%] w-[75%] mx-auto">
                    <div className="flex justify-between mt-20">
                                    
                                    <div className="text-center pt-1  text-white font-light">
                                        Posted at: <span className="text-[#CDF5FD] font-thin">{new Date(discussion.createdAt).toLocaleString()}</span> 
                                    </div>
                    </div>
                    <h1 className="md:text-6xl text-4xl font-extrabold md:mb-3 mb-10 md:mt-2 mt-14">{discussion.title}</h1>
                    <h2 className="md:text-3xl text-2xl font-extralight md:mb-4 mb-10 text-sky-500">~ {discussion.description}</h2>
                    
                    
                    
                    
                    

                    <div className="text-5xl font-bold text-center mt-2 mb-3 flex justify-between">
                        <div className="flex w-[13%] justify-around ml-[-1.5%]">
                            <div className="flex text-2xl justify-around w-[35%]">
                                <div className="clap pt-[0.1rem] hover:text-[#A0E9FF] duration-150">
                                ⬆
                                </div>
                                <div className="clapcount font-thin text-sky-200 text-lg my-auto pt-[0.26rem]">
                                    13
                                </div>
                            </div>

                            <div className="flex text-2xl justify-around w-[35%]">
                                <div className="clap text-xl pt-[0.34rem]">
                                    💬
                                </div>
                                <div className="clapcount font-thin text-sky-200 text-lg my-auto pt-1">
                                    {comments.length}
                                </div>
                            </div>
                            
                        </div>
                        <div className="flex">
                            <div className="share text-3xl">
                            
                            </div>
                        </div>
                    </div>

                    
                    

                    
                    <div className="box md:w-[100%] w-[100%] mx-auto rounded-md item-start mt-14">
                        <form onSubmit={handleCommentSubmit} className="w-[50%] flex flex-row justify-between">
                            <div className="md:w-[85%] w-[90%] mx-auto">
                                <textarea
                                    id="description"
                                    placeholder="Comment"
                                    className="w-full border rounded-md ml-[-1%] p-2 focus:outline-none bg-black border-blue-500 text-white text-center"
                                    rows="1"
                                    value={commentContent}
                                    onChange={(e) => setCommentContent(e.target.value)}
                                ></textarea>
                            </div>
                            <div className="text-center ml-3">
                                <button type="submit" className="hover:bg-blue-700 mt-1 bg-blue-600 text-white py-1 px-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-md font-light">Post It</button>
                            </div>
                        </form>
                    </div>

                    

                    <div className="grid grid-cols-1 md:grid-cols-1 gap-5 bg-black mt-6 md:w-full w-[95%] mx-auto mb-24 ">
                        {comments.toReversed().map((comment) => (
                            
                            <div key={comment._id} className="flex flex-col  rounded-md  bg-black w-[40%]">
                                <div className="flex justify-between">
                                    <div className="font-black">
                                        Someone
                                    </div>
                                    <div className="text-right font-thin text-[#CDF5FD] mt-auto">
                                        <span className="text-[#CDF5FD]">
                                            {Math.floor(Math.abs(((new Date()) - new Date(comment.createdAt)) / (1000 * 60 * 60))).toLocaleString()} hr
                                        </span> 
                                    </div>
                                </div>
                                <div className="flex flex-row md:flex-row w-[100%] justify-between mx-auto my-auto">
                                    <div className="text-left text-white font-light text-lg">
                                        " {comment.content} "
                                    </div>
                                    

                                </div>
                            </div>


                        ))}
                    </div>

                    
                </div>
            ) : (
                <p className="text-white">Loading...</p>
            )}
        </div>
    );
};

export default DiscussionPage;
