import React, { Fragment } from "react";

export default function Profile() {
    return (
        <Fragment>
            <div className="text-5xl font-extralight pt-20">
                <h1>Uplode Your Code Blog</h1>
            </div>
            <div className="flex flex-col items-center justify-center h-[70vh]">
                <form className="bg-white shadow-md rounded-lg p-6 w-[50%]">
                    <div className="mb-6">
                        
                        <input type="text" id="title" placeholder="Title" className="w-full border border-gray-300 rounded-md p-2 focus:outline-none text-center focus:border-blue-500" />
                    </div>
                    <div className="mb-6">
                        
                        <textarea id="description" placeholder="Description" className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500 text-center" rows="4"></textarea>
                    </div>
                    <div className="mb-6 flex w-[65%] mx-auto">
                        <label htmlFor="title" className="block text-gray-700 text-md my-auto mx-auto font-light">Upload Code File :</label>
                        <input type="file" id="title" className="w-[55%] mx-auto border border-gray-300 rounded-md p-2 focus:outline-none text-center focus:border-blue-500 flex justify-center items-center" />

                    </div>
                    <div className="mb-6">
                        
                        <input type="text" id="title" placeholder="Tags" className="w-[60%] border border-gray-300 rounded-md p-2 focus:outline-none text-center focus:border-blue-500" />
                    </div>
                    <div className="text-center">
                        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Submit</button>
                    </div>
                </form>
            </div>
        </Fragment>
    )
}
