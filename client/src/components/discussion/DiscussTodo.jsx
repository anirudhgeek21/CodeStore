import React, { Fragment } from "react";

export default function DiscussTodo() {
    return (
        <Fragment>
            <div className="text-3xl font-extralight pt-5 text-center mt-4 text-sky-500">
                <h1>Start a new discussion</h1>
            </div>
            <div className="flex flex-col items-center justify-center h-[33vh]">
                <form className="border-blue-600 border-[1px] shadow-md rounded-lg p-6 md:w-[40%] w-[90%]">
                    <div className="mb-6">
                        
                        <input type="text" id="title" placeholder="Title" className="w-full border rounded-md p-2 focus:outline-none text-center border-blue-500 bg-black text-white" />
                    </div>
                    <div className="mb-6">
                        
                        <textarea id="description" placeholder="Description" className="w-full border rounded-md p-2 focus:outline-none border-blue-500 bg-black text-white text-center" rows="1"></textarea>
                    </div>
                    
                   
                    <div className="text-center">
                        <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Start Now</button>
                    </div>
                </form>
            </div>
        </Fragment>
    )
}
