
import React, {Fragment} from "react";
import Featured from './featured/FeaturedSection'

export default function Wall() {

    const Blogs =[
        {
            id : 1,
            title: "Hello",
            description : "Worlds",
            file: "hello",
            tags: "jeelo"
        },
    ]




    return(
        <Fragment>
            <div>
                <Featured />
            </div>
            <div className="border-b border-gray-300 mt-0 md:mt-24"></div>
            <div className="text-5xl font-extralight pt-10 pb-6 text-center">
                <h1>Discover the madness</h1>
            </div>
            <div className="bg-[#CDF5FD] grid grid-cols-1 md:grid-cols-3 gap-3">

                {Blogs.map((blog)=>(
                    <div key={blog.id} className="bg-[#00A9FF] px-14 py-10 m-7 flex flex-col justify-center rounded-lg" style={{backdropFilter: 'blur(20px)'}}>
              
                    <div className="title font-bold text-3xl text-white">
                        <h1>{blog.title}</h1>
                    </div>
                    <div className="description font-light my-5 text-[#CDF5FD]">
                        <p>" {blog.description} "</p>
                    </div>
                    <div className="file text-[#CDF5FD]">
                        <p>{blog.file}</p>
                    </div>
                    <div className="tags text-[#CDF5FD]">
                        <p>{blog.file}</p>
                    </div>  
                
                </div>      
                ))}
        
            </div>
        </Fragment>
    )
}