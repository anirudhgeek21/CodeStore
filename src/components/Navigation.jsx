import React from "react";
import { Link } from "react-router-dom";
import Footer from './Footer';
import Wall from './Wall';
import Upload from './Upload';

export default function Navigation() {
    return (
        <div className="p-5 bg-[#00A9FF]">
            <div className="flex justify-between w-[89%] mx-auto">
                <div className="font-bold text-4xl">
                    <Link to="/" className="text-white">CodeStore</Link>
                </div>
                <div className="flex justify-around items-center">
                    <div className="px-3 text-lg font-light">
                        <Link to="/" className="text-white">Wall</Link>
                    </div>
                    <div className="px-3 text-lg font-light">
                        <Link to="/upload" className="text-white">Upload</Link>
                    </div>
                    <div className="px-3 text-lg font-light">
                        <Link to="/profile" className="text-white">Profile</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
