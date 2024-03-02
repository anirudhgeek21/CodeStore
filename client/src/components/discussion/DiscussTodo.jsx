import React, { Fragment,useState } from "react";

export default function DiscussTodo() {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    

    const onSubmitForm = async (e) => {
        e.preventDefault();
        try {
        const body = { title, description};
        const response = await fetch('http://localhost:5555/discussions', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
        });
        
        window.location = '/discuss';
        } catch (error) {
        console.log(error.message);
        }
    };



    return (
        <Fragment>
            <div className="text-5xl font-bold mb-3 text-center text-sky-500">
                <h1>Start a new discussion</h1>
            </div>
            <div className="flex flex-col items-center justify-center h-[33vh]">
                <form className="rounded-lg p-6 md:w-[100%] w-[90%]"
                onSubmit={onSubmitForm}>
                    <div className="mb-4">
                        
                        <input type="text" id="title" placeholder="Title *" className="w-full border rounded-md p-2 focus:outline-none text-center border-blue-500 bg-black text-white font-extrabold" 
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}/>
                    </div>
                    <div className="mb-2">
                        
                        <textarea id="description" placeholder="Description" className="w-full border rounded-md p-2 focus:outline-none border-blue-500 bg-black text-[#CDF5FD] font-extralight text-center" rows="1"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}>

                        </textarea>
                    </div>

                                <div className=" flex md:w-[100%] w-full mx-auto">
                                    <select name="category" id="category" className="w-[100%] text-center text-md font-extralight py-2 bg-black text-sky-100 border rounded-md border-blue-500"
                                    value={category}
                                    onChange={(e) => setCategory(e.target.value)}
                                    >
                                        <option value="general">Select One Category</option>
                                        
                                        <option value="NSUT">NSUT</option>
                                        <option value="DTU">DTU</option>
                                        <option value="IIITD">IIITD</option>
                                        <option value="IITD">IITD</option>
                                        <option value="DU">DU</option>
                                        <option value="MSIT">MSIT</option>
                                        <option value="IPU">IPU</option>
                                        <option value="IGDTU">IGDTU</option>
                                        
                                    </select>
                                </div>
                    
                   
                    <div className="text-center mt-7">
                        <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Start Now</button>
                    </div>
                </form>
            </div>
        </Fragment>
    )
}
