import React, { Fragment , useState} from "react";

export default function Upload() {

    const [title, setTitle] = useState('');
    const [description_short, setDescription_short] = useState('');
    const [description_long, setDescription_long] = useState('');
    const [file, setFile] = useState('');
    const [tags, setTags] = useState('');

    const onSubmitForm = async (e) => {
        e.preventDefault();
        try {
        const body = { title, description_short , description_long , file, tags };
        const response = await fetch('http://localhost:5555/blogs', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
        });
        
        window.location = '/';
        } catch (error) {
        console.log(error.message);
        }
    };









    return (
        <Fragment>
            <div className="md:text-5xl text-5xl text-sky-500 font-extralight md:pt-14 pt-14 text-center md:w-full mx-auto w-[90%]">
                <h1>Uplode Your Code Blog</h1>
            </div>
            <div className="flex flex-col items-center justify-center md:h-[70vh] h-[65vh] md:mt-8 mb-14">
                <form className="border-blue-600 border-[2px] shadow-md rounded-lg p-6 md:w-[40%] w-[90%] md:pb-16 md:pt-5" onSubmit = {onSubmitForm}>
                    <div className="mb-6 md:w-[80%] w-full mx-auto mt-10">
                        
                        <input type="text" id="title" placeholder="Title" className="w-full border rounded-md p-2 focus:outline-none text-center bg-black border-blue-500 text-white" 
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}/>
                    </div>
                    <div className="mb-6 md:w-[80%] w-full mx-auto">
                        
                        <textarea id="description" placeholder="Short Description" className="w-full border rounded-md p-2 focus:outline-none bg-black border-blue-500 text-white text-center" rows="1"
                        value={description_short}
                        onChange={(e) => setDescription_short(e.target.value)}
                        ></textarea>
                    </div>
                    <div className="mb-6 md:w-[80%] w-full mx-auto">
                        
                        <textarea id="description" placeholder="Content" className="w-full border rounded-md p-2 focus:outline-none bg-black border-blue-500 text-white text-center" rows="4"
                        value={description_long}
                        onChange={(e) => setDescription_long(e.target.value)}
                        ></textarea>
                    </div>
                    <div className="mb-6 flex md:w-[80%] w-full mx-auto">
                        <label htmlFor="title" className="block text-md my-auto mx-auto text-white font-light">Code File Link:</label>
                        <input type="text" placeholder="Link" className="w-[55%] mx-auto border  rounded-md p-2 focus:outline-none text-center bg-black border-blue-500 text-white flex justify-center items-center" 
                        value={file}
                        onChange={(e) => setFile(e.target.value)}
                        />

                    </div>
                    <div className="mb-6 md:w-[80%] w-full mx-auto">
                        
                        <input type="text" id="title" placeholder="Tags" className="w-[100%] border rounded-md p-2 focus:outline-none text-center bg-black border-blue-500 text-white mx-auto" 
                        value={tags}
                        onChange={(e) => setTags(e.target.value)}
                        />
                    </div>
                    <div className="text-center">
                        <button type="submit" className="hover:bg-blue-700 bg-blue-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Submit</button>
                    </div>
                </form>
            </div>
        </Fragment>
    )
}
