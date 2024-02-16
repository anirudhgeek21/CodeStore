import React, { Fragment } from "react";

export default function DiscussTodo() {
    return (
        <Fragment>
            <div className="text-3xl font-extralight pt-5 text-center mt-4">
                <h1>Start a new discussion</h1>
            </div>
            <div className="flex flex-col items-center justify-center h-[33vh]">
                <form className="bg-white shadow-md rounded-lg p-6 md:w-[40%] w-[90%]">
                    <div className="mb-6">
                        
                        <input type="text" id="title" placeholder="Title" className="w-full border border-gray-300 rounded-md p-2 focus:outline-none text-center focus:border-blue-500" />
                    </div>
                    <div className="mb-6">
                        
                        <textarea id="description" placeholder="Description" className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500 text-center" rows="1"></textarea>
                    </div>
                    
                   
                    <div className="text-center">
                        <button type="submit" className="bg-[#00A9FF] hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Start Now</button>
                    </div>
                </form>
            </div>
        </Fragment>
    )
}
