import React,{Fragment,useState,useEffect} from "react";
import { Link } from "react-router-dom";

export default function DiscussionCards() {


    const [discussion, setDiscussion] = useState([]);

    useEffect(() => {
        const getDiscussion = async () => {
            try {
                const response = await fetch("https://code-store-backend.vercel.app/discussions");
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const jsonData = await response.json();
                
                setDiscussion(jsonData.data);
            } catch (error) {
                console.error('Error fetching data:', error.message);
            }
        };
        getDiscussion();
    }, []);

   

    
    return(
        <Fragment>
            <div className="heading mt-6 md:w-[90%] bg-black text-sky-500 w-[90%] text-center md:text-5xl text-2xl font-extrabold pt-5 mx-auto mb-5">
                Join other open Discussions
            </div>
           

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 bg-black mt-0 md:w-[95%] w-[85%] mx-auto mb-24">


                {discussion.toReversed().map((card)=>(
                    
                        <div key={card._id} className="flex-row mt-3 p-6 rounded-md hover:bg-blue-600 bg-black border-[1px] border-blue-600">
                            <Link to={`/discussion/${card._id}`}>
                            <div className="text-left mb-3 text-3xl font-extrabold text-white">
                                {card.title}
                            </div>
                            <div className="text-left text-[#CDF5FD] font-extralight text-lg">
                                " {card.description} "
                            </div>
                            
                            
                            
                            {/* <div className="text-5xl font-bold items-baseline text-center mt-2 flex justify-between">
                                <div className="flex w-[30%] justify-between">
                                    <div className="flex text-2xl justify-around w-[40%]">
                                        <div className="clap pt-[0.1rem] text-white my-auto hover:text-[#89CFF3] duration-200">
                                        ⬆
                                        </div>
                                        <div className="clapcount font-thin text-sky-200 text-lg my-auto pt-[0.26rem]">
                                            13
                                        </div>
                                    </div>

                                    <div className="flex text-2xl justify-around w-[40%]">
                                        <div className="clap text-xl pt-[0.34rem]">
                                            💬
                                        </div>
                                        <div className="clapcount font-thin text-sky-200 text-lg my-auto pt-1">
                                            13
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className="flex">
                                    <div className="share text-3xl">
                                    
                                    </div>
                                </div>
                            </div> */}

                            </Link>
                        </div>
                   
                ))}

            </div>

            
        </Fragment>
    )
}
