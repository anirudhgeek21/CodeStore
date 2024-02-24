import React, { Fragment } from "react";
import { Link } from "react-router-dom";

export default function CategoryDiscussion(prop) {
    const Categories = [
        { title: "NSUT" },
        { title: "DTU" },
        { title: "IIITD" },
        { title: "IITD" },
        { title: "DU" },
        { title: "MSIT" },
        { title: "IPU" },
        { title: "IGDTU" },
        { title: "General" },
        
    ];

    return (
        <Fragment>
            <div>
                <div className="flex justify-between text-sm mt-7 text-sky-500 uppercase max-md:max-w-full ml-[2.49rem] font-extrabold">
                    <div>
                    🌐 {prop.name} Communities
                    </div>
                    <div className="mr-11 hover:text-white duration-150">
                      <span className="text-white text-lg pb-1 pr-[0.15rem]">+</span> CREATE A COMMUNITY
                    </div>
                </div>
                <div className="grid md:grid-cols-9 grid-cols-3 md:mt-3 mt-6 max-md:max-w-full ml-[2.49rem]">
                    {Categories.map((category, index) => (
                        <Link to='/collegediscussion' className="cursor-default">
                            <div key={index} className="bg-black mt-3 font-[1000] md:w-[72%] w-[87%] hover:bg-blue-500 md:py-8 py-8 md:text-2xl text-md border-[1px] border-blue-500 rounded-full">
                                <div className="text-white text-center">{category.title}</div>
                            </div>
                        </Link>
                    ))}
                </div>

                
            </div>
        </Fragment>
    );
}
