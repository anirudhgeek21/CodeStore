import React,{Fragment} from "react";
import imagebg from './img.png';
import profilepic from './profilepic.png';

export default function Profile() {
    return(
        <Fragment>
            <div className="bg-black h-[100vh]">
                    <div className="bg-[#CDF5FD] h-[400px] w-full">
                        <img src={imagebg} className="w-full h-full" alt="" />
                    </div>
        
                    <div className="h-[300px] border-blue-600 border-[3px] bg-black w-[21%] rounded-full absolute top-[21rem] left-20">
                        <img src={profilepic} className="rounded-full mt-6" alt="" />
                    </div>
                    <div className="text-right pr-24 text-5xl pt-6 font-extralight text-white">
                        Anirudh Prajapati
                    </div>
            </div>
        
        </Fragment>
    )
};