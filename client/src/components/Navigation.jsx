import React from "react";
import { Link } from "react-router-dom";
import Footer from './Footer';
import Wall from './Wall';
import Upload from './Upload';

export default function Navigation() {
    return (
        <div className="p-5 bg-blue-600 ">
            <div className="md:flex justify-between md:w-[90%] w-[100%] mx-auto">
                <div className="font-extrabold text-5xl md:ml-0 ml-[1rem] md:mb-0 mb-3">
                    <Link to="/" className="text-white ">CodeStore</Link>
                </div>
                <div className="flex justify-around items-end">
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
                        <Link to="/profile" className="text-white hover:text-blue-300 duration-200">Profile</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
