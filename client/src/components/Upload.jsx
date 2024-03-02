import React, { Fragment , useState ,useRef} from "react";
import JoditEditor from 'jodit-react';
import Navigation from "./Navigation";

export default function Upload() {
    const editor = useRef(null);

    const [title, setTitle] = useState('');
    const [description_short, setDescription_short] = useState('');
    const [description_long, setDescription_long] = useState('');
    const [author, setAuthor] = useState('');
    const [category, setCategory] = useState('');
    const [file, setFile] = useState('');
    const [tags, setTags] = useState('');

    const onSubmitForm = async (e) => {
        e.preventDefault();
        try {
            const body = { title, description_short , description_long , author , category , file, tags };
            const response = await fetch('https://code-store-backend.vercel.app/blogs', {
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
            <Navigation />
            <div className="md:text-6xl text-3xl text-sky-500 font-extrabold md:pt-14 pt-14 text-center md:w-full mx-auto w-[90%] mt-5">
                <h1>Upload Your Code Blog</h1>
            </div>
            <div className="flex items-start justify-start md:mt-3 mb-14">
                <form className=" shadow-md rounded-lg p-6 md:w-[100%] md:mx-24 mx-auto w-[90%] md:p-16  " onSubmit = {onSubmitForm}>
                    <div className="flex md:flex-row flex-col"> 



                            <div className="flex-row md:w-[35%] w-[90%] mx-auto md:mr-16">
                                <div className="mb-2 md:w-[100%] w-full mx-auto ">
                                    <input type="text" id="title" placeholder="Title *" className="w-full border rounded-md p-2 focus:outline-none text-center bg-black border-blue-500 text-white font-extrabold" 
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="mb-1 md:w-[100%] w-full mx-auto">
                                    <textarea id="description" placeholder="Short Description *" className="w-full border rounded-md p-2 focus:outline-none bg-black border-blue-500 text-sky-100 text-center font-light" rows="5"
                                        value={description_short}
                                        onChange={(e) => setDescription_short(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="mb-2 flex md:w-[100%] w-full mx-auto">
                                    <select name="authors" id="authors" className="w-[100%] text-center text-md font-extralight focus:outline-none py-2 bg-black text-sky-100 border rounded-md border-blue-500"
                                    value={author}
                                    onChange={(e) => setAuthor(e.target.value)}
                                    >
                                        <option value="">Select One Author</option>
                                        <option value="Bonnie">Bonnie</option>
                                        <option value="Clyde">Clyde</option>
                                        <option value="Dostoyevsky">Dostoyevsky</option>
                                        <option value="Snowden">Snowden</option>
                                        <option value="Asange">Asange</option>
                                        <option value="Aristotle">Aristotle</option>
                                    </select>
                                </div>


                                <div className="mb-2 flex md:w-[100%] w-full mx-auto">
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

                                <div className="mb-2 flex md:w-[100%] w-full mx-auto">
                                    
                                    <input type="text" placeholder="Code File Link" className="w-[100%] mx-auto border  rounded-md p-2 focus:outline-none text-center bg-black border-blue-500 font-normal text-blue-300 flex justify-center items-center" 
                                        value={file}
                                        onChange={(e) => setFile(e.target.value)}
                                    />
                                </div>
                                <div className="mb-2 md:w-[100%] w-full mx-auto">
                                    <input type="text" id="title" placeholder="Tags" className="w-[100%] border rounded-md p-2 focus:outline-none text-center bg-black border-blue-500 text-white mx-auto font-light" 
                                        value={tags}
                                        onChange={(e) => setTags(e.target.value)}
                                    />
                                </div>
                                <div className="text-center mt-5 hidden md:block">
                                    <button type="submit" className="hover:bg-blue-700 bg-blue-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Submit</button>
                                </div>
                            </div>
                            <div className="mb-6 md:w-[80%] w-full mx-auto jodit-container bg-black text-blue md:mt-0 mt-8" style={{ maxHeight: '500px', overflowY: 'auto' }}>
                                <JoditEditor
                                    ref={editor}
                                    value={description_long || ''}
                                    onChange={(content) => setDescription_long(content)}
                                    
                                />
                            </div>
                            <div className="text-center mt-5 block md:hidden">
                                    <button type="submit" className="hover:bg-blue-700 bg-blue-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Submit</button>
                            </div>



                    </div>
                    {/* <div className="flex w-[80%] mx-auto">
                        
                    </div> */}
                    
                </form>
            </div>
        </Fragment>
    );
}
