import React,{Fragment} from "react";
import imagebg from './img.png';
import profilepic from './profilepic.png';
import Navigation from "./Navigation";

export default function Profile() {
    return(
        <Fragment>
            <Navigation />
            <div className="bg-black h-[100vh]">
                    <div className="bg-[#CDF5FD] md:h-[400px] h-[130px] w-full">
                        <img src={imagebg} className="w-full h-full" alt="" />
                    </div>
        
                    <div className="md:h-[300px] h-[140px] border-blue-600 border-[3px] bg-black md:w-[21%] w-[35%] rounded-full absolute md:top-[21rem] top-[30%] md:left-20">
                        <img src={profilepic} className="rounded-full md:mt-6 mt-3" alt="" />
                    </div>
                    <div className="text-right md:pr-8 md:text-5xl text-3xl mr-5 md:pt-9 pt-4 md:font-extralight font-light text-white">
                        Anirudh Prajapati
                    </div>
            </div>
        
        </Fragment>
    )
};