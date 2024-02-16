import React, { Fragment } from "react";

export default function Upload() {
    return (
        <Fragment>
            <div className="md:text-5xl text-5xl text-sky-500 font-extralight md:pt-20 pt-14 text-center md:w-full mx-auto w-[90%]">
                <h1>Uplode Your Code Blog</h1>
            </div>
            <div className="flex flex-col items-center justify-center md:h-[70vh] h-[65vh] mt-8">
                <form className="border-blue-600 border-[2px] shadow-md rounded-lg p-6 md:w-[40%] w-[90%] md:py-16">
                    <div className="mb-6 md:w-[80%] w-full mx-auto">
                        
                        <input type="text" id="title" placeholder="Title" className="w-full border rounded-md p-2 focus:outline-none text-center bg-black border-blue-500 text-white" />
                    </div>
                    <div className="mb-6 md:w-[80%] w-full mx-auto">
                        
                        <textarea id="description" placeholder="Description" className="w-full border rounded-md p-2 focus:outline-none bg-black border-blue-500 text-white text-center" rows="4"></textarea>
                    </div>
                    <div className="mb-6 flex md:w-[80%] w-full mx-auto">
                        <label htmlFor="title" className="block text-md my-auto mx-auto text-white font-light">Upload Code File :</label>
                        <input type="file" id="title" className="w-[55%] mx-auto border border-gray-300 rounded-md p-2 focus:outline-none text-center focus:border-blue-500 flex justify-center items-center text-white" />

                    </div>
                    <div className="mb-6 md:w-[80%] w-full mx-auto">
                        
                        <input type="text" id="title" placeholder="Tags" className="w-[100%] border rounded-md p-2 focus:outline-none text-center bg-black border-blue-500 text-white mx-auto" />
                    </div>
                    <div className="text-center">
                        <button type="submit" className="hover:bg-blue-700 bg-blue-500 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Submit</button>
                    </div>
                </form>
            </div>
        </Fragment>
    )
}
