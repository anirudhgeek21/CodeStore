import React , {Fragment , useState} from "react";
import Navigation from "../Navigation";

export default function DiscussionThread() {

    const [showCommentSection, setShowCommentSection] = useState(false);

    const toggleCommentSection = () => {
        setShowCommentSection(prevState => !prevState);
    };


    return(
        <Fragment>
                <Navigation x="X" college="NSUT" />
                <div className="flex-row w-[80%] text-white mx-auto text-center mt-16">
                    <div className=" mx-auto w-full text-6xl font-extrabold text-left">IGDTU aur DTU ke fest mein kon kon chalega</div>
                    <div className="text-left text-3xl mt-5 text-sky-500 font-extralight">~ Moksha se toh better nahi honge</div>
                </div>



                <div className="text-5xl font-bold text-center mt-2 mb-3 ml-32 flex justify-between">
                        <div className="flex w-[13%] justify-around">
                            <div className="flex text-[1.77rem] justify-around w-[35%] mt-auto">
                                <div className="clap pt-[0.1rem] text-white my-auto mt-auto hover:text-sky-600 duration-150">
                                    ⬆
                                </div>
                                <div className="clapcount font-thin text-sky-200 text-xl pt-[0.26rem] mt-auto">
                                    13
                                </div>
                            </div>

                            <div className="flex text-[1.7rem] justify-around w-[37%] mt-auto">
                                <div className="clap pt-[0.34rem]">
                                    💬
                                </div>
                                <div className="clapcount font-thin text-sky-200 text-xl my-auto pt-1">
                                    13
                                </div>
                            </div>
                            
                        </div>
                        
                    </div>





                
                    <div class="box mt-12 ml-[9%] md:w-[50%] w-[100%] mb-0 rounded-md flex-col justify-around">
                        <form class="flex flex-row justify-around"> 
                            <div class="md:w-[80%] w-[90%] mt-auto ">
                                <textarea
                                    id="description"
                                    placeholder="Add your Comment"
                                    class="w-full mt-auto border-[0.1px] rounded-md p-2 focus:outline-none bg-black border-blue-500 text-white text-center"
                                    rows="1"
                                ></textarea>
                            </div>
                            <div class="text-center mt-1">
                                <button type="submit" class="hover:bg-blue-700 bg-blue-600 text-white py-1 px-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-md font-light">Post It</button>
                            </div>
                        </form>
                    </div>


                    <div className="text-white md:w-[80%] mx-auto mt-9">
                        <div className="flex">
                            
                            <div className="mx-3 text-lg font-extrabold">Dr.Someone</div>
                            <div className="">.</div>
                            <div className="mx-3 text-md font-extralight my-auto ">20h</div>
                            
                        </div>
                        <div className="ml-3 font-light text-sky-200"> Kesa lag rha hai</div>



                        <div className="text-3xl font-black text-center flex flex-col mt-[0.3rem]">
                            <div className="flex w-[9%] justify-around ">
                                <div className="flex text-base justify-around w-[35%] mt-auto ">
                                    <div className="clap pt-[0.1rem] text-white my-auto mt-auto hover:text-sky-600 duration-150">
                                        ⬆
                                    </div>
                                    <div className="clapcount font-thin text-sky-200 text-sm pt-[0.26rem] mt-auto">
                                        13
                                    </div>
                                </div>

                                <div className="flex text-sm justify-around w-[37%] mt-auto ">
                                    <div className="clap pt-[0.34rem] font-bold text-sky-600 hover:text-sky-400" onClick={toggleCommentSection}>
                                        Reply
                                    </div>
                                </div>
                            </div>

                            {showCommentSection && (
                                <div className="mt-2 md:w-[46%] w-[100%] mb-0 rounded-md flex-col justify-around">
                                    <form className="flex flex-row justify-around">
                                        <div className="md:w-[80%] w-[90%] mt-auto">
                                            <textarea
                                                id="description"
                                                placeholder="Add your Comment ..."
                                                className="w-full md:mt-[0.33rem] text-left text-sm border-[0.1px] font-light rounded-md p-2 focus:outline-none bg-black border-blue-500 text-white"
                                                rows="1"
                                            ></textarea>
                                        </div>
                                        <div className="text-center">
                                            <button type="submit" className="hover:bg-blue-700 bg-blue-600 text-white py-1 px-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-sm font-light mt-0">Post It</button>
                                        </div>
                                    </form>
                                </div>
                            )}
                        </div>


                        <div className="text-white md:w-[95%] mx-auto mt-4">
                            <div className="flex">
                                <div className="mx-3 text-lg font-extrabold">Dr.Capablanca</div>
                                <div className="">.</div>
                                <div className="mx-3 text-md font-extralight my-auto ">20h</div>
                                
                            </div>
                            <div className="ml-3 font-light text-sky-200"> Kesa lag rha hai</div>






                                <div className="text-3xl font-black text-center flex justify-between mt-[0.3rem]">
                                    <div className="flex w-[10%] justify-around ">
                                        <div className="flex text-base justify-around w-[35%] mt-auto ">
                                            <div className="clap pt-[0.1rem] text-white my-auto mt-auto hover:text-sky-600 duration-150">
                                                ⬆
                                            </div>
                                            <div className="clapcount font-thin text-sky-200 text-sm pt-[0.26rem] mt-auto">
                                                13
                                            </div>
                                        </div>

                                        <div className="flex text-sm justify-around w-[37%] mt-auto ">
                                            
                                            <div className="clap pt-[0.34rem] font-bold text-sky-600 hover:text-sky-400">
                                                Reply
                                            </div>
                                            
                                        </div>
                                        
                                    </div>
                                
                                </div>




                            <div className="text-white md:w-[95%] mx-auto mt-4">
                                <div className="flex">
                                    <div className="mx-3 text-lg font-extrabold">Dr.Capablanca</div>
                                    <div className="">.</div>
                                    <div className="mx-3 text-md font-extralight my-auto ">20h</div>
                                    
                                </div>
                                <div className="ml-3 font-light text-sky-200"> Kesa lag rha hai</div>


                                <div className="text-3xl font-black text-center flex justify-between mt-[0.3rem]">
                                    <div className="flex w-[10%] justify-around ">
                                        <div className="flex text-base justify-around w-[35%] mt-auto ">
                                            <div className="clap pt-[0.1rem] text-white my-auto mt-auto hover:text-sky-600 duration-150">
                                                ⬆
                                            </div>
                                            <div className="clapcount font-thin text-sky-200 text-sm pt-[0.26rem] mt-auto">
                                                13
                                            </div>
                                        </div>

                                        <div className="flex text-sm justify-around w-[37%] mt-auto ">
                                            
                                            <div className="clap pt-[0.34rem] font-bold text-sky-600 hover:text-sky-400">
                                                Reply
                                            </div>
                                            
                                        </div>
                                        
                                    </div>
                                
                                </div>
                            </div>
                        </div>
                    </div>

                    

        </Fragment>
    )
}