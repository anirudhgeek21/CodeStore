import React from "react";
import { Link } from "react-router-dom";
import Footer from './Footer';
import Wall from './Wall';
import Upload from './Upload';

export default function Navigation(props) {

    console.log(props);
    return (
        <div className="p-5 bg-blue-600 ">
            <div className="md:flex justify-between md:w-[90%] w-[100%] mx-auto">
                <div className="font-extrabold text-4xl md:ml-0 ml-[1.2rem] md:mb-0 mb-3">
                    <Link to="/" className="text-white "><span className="bg-slate-800 px-2 pb-1 rounded-sm mr-1">Pseudo</span><span>Social</span><span className="text-black font-black text-2xl ml-1"> {props.x} <span className="text-sky-100 text-4xl ml-1">{props.college}</span></span></Link>
                </div>
                <div className="flex justify-around items-end md:mt-0 mt-[1.35rem]">
                    <div className="px-3 text-lg font-light">
                        <Link to="/discuss" className="text-white hover:text-blue-300 duration-200">Discuss</Link>
                    </div>
                    <div className="px-3 text-lg font-light">
                        <Link to="/" className="text-white hover:text-blue-300 duration-200">Wall</Link>
                    </div>
                    
                    <div className="px-3 text-lg font-light">
                        <Link to="/upload" className="text-white hover:text-blue-300 duration-200">Upload</Link>
                    </div>
                    <div className="px-3 text-lg font-light">
                        <Link to="/profile" className="text-white hover:text-blue-300 duration-200">Help</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
